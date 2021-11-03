import {Component, Inject, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {SettingsService} from 'src/app/services/settings.service';
import {RateService} from 'src/app/services/rate.service';
import {ToastService} from 'src/app/services/toast.service';
import {VOCABULARY} from 'src/app/data/vocabulary';
import {Rate} from 'src/app/models/rate';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ChatService} from 'src/app/services/chat.service';
import {ERROR_FUNC_SEND_STATS} from 'src/app/models/error/errorFunctionnal';
import {getDuration} from '../../../../utils/utils';

interface Sentences {
  questionOne: { french: string; foreign: string };
  questionTwo: { french: string; foreign: string };
  questionThree: { french: string; foreign: string };
  questionFour: { french: string; foreign: string };
  questionFive: { french: string; foreign: string };
}

@Component({
  selector: 'app-rate-dialog',
  templateUrl: './rate-dialog.component.html',
  styleUrls: ['./rate-dialog.component.scss'],
})
export class RateDialogComponent implements OnInit {
  public rate: Rate;
  public rates: boolean[][] = [
    [false, false, false, false, false],
    [false, false, false, false, false],
  ];
  public sentences: Sentences = {
    questionOne: {
      french: '',
      foreign: '',
    },
    questionTwo: {
      french: '',
      foreign: '',
    },
    questionThree: {
      french: '',
      foreign: '',
    },
    questionFour: {
      french: '',
      foreign: '',
    },
    questionFive: {
      french: '',
      foreign: '',
    },
  };
  public canSendRate: boolean;
  private isMultiDevices: boolean;
  public typeEntretien: string;
  public types = ['Accueil', 'AZLA', 'PRV', 'Inscription', 'Indemnisation', 'Accompagnement', 'Autres'];
  public autreType = '';

  constructor(
    private dialogRef: MatDialogRef<RateDialogComponent>,
    private rateService: RateService,
    private settingsService: SettingsService,
    private toastService: ToastService,
    private router: Router,
    private chatService: ChatService,
    @Inject(MAT_DIALOG_DATA) public data: { guest: Array<string> }
  ) {
    this.settingsService.user.subscribe((user) => {
      if (user !== null) {
        this.isMultiDevices = user.isMultiDevices;
      } else {
        this.router.navigate(['/start']);
      }
    });
  }

  ngOnInit(): void {
    const rateFr = VOCABULARY.find((v) => v.isoCode === 'fr-FR').sentences.rate;
    if (rateFr) {
      this.sentences.questionOne.french = rateFr.qualityTranslate;
      this.sentences.questionTwo.french = rateFr.rating;
      this.sentences.questionThree.french = rateFr.comment;
      this.sentences.questionFour.french = rateFr.technical;
      this.sentences.questionFive.french = rateFr.typeInterview;
    }
    let languageNameFr: string = 'fr-FR';
    if (this.settingsService.user.value.language.written === 'fr-FR' || this.settingsService.user.value.language.written === 'fr-CA') {
      this.sentences.questionOne.foreign = '';
      this.sentences.questionTwo.foreign = '';
      this.sentences.questionThree.foreign = '';
      this.sentences.questionFour.foreign = '';
      this.sentences.questionFive.foreign = '';
    } else {
      const vocabularyForeign = VOCABULARY.find((v) => v.isoCode === this.settingsService.user.value.language.written);
      const rateForeign = vocabularyForeign.sentences.rate;
      if (rateForeign) {
        this.sentences.questionOne.foreign = rateForeign.qualityTranslate;
        this.sentences.questionTwo.foreign = rateForeign.rating;
        this.sentences.questionThree.foreign = rateForeign.comment;
        this.sentences.questionFour.foreign = rateForeign.technical;
        this.sentences.questionFive.foreign = rateForeign.typeInterview;
        languageNameFr = vocabularyForeign.isoCode;
      }
    }
    let isoCodes;
    if (this.data.guest && this.data.guest.length > 0) {
      isoCodes = this.data.guest
        .filter((l, index) => l !== 'fr-FR' && this.data.guest.indexOf(l) === index)
        .join(',');
      if (!isoCodes) {
        isoCodes = [languageNameFr];
      }
    } else {
      isoCodes = [languageNameFr];
    }

    const date = new Date();
    this.rate = {
      language: isoCodes,
      date,
      hour: date.getHours() + ':' + String(date.getMinutes()).padStart(2, '0'),
      grades: [undefined, undefined],
      comment: '',
      offerLinked: 'non',
      conversationDuration: '',
      typeEntretien: this.typeEntretien
    };
    this.canSendRate = false;
  }

  public eval(value: number, question: number) {
    const date = new Date();
    this.rate.grades[question] = value + 1;
    this.rate.date = date;
    this.rate.hour = date.getHours() + ':' + String(date.getMinutes()).padStart(2, '0');

    let firstMessageTime = '00:00:00';
    let lastMessageTime = '00:00:00';

    const length = this.chatService.messagesStored.length;
    if (length > 1) {
      firstMessageTime = this.chatService.messagesStored[0].message.hour;
      lastMessageTime = this.chatService.messagesStored[length - 1].message.hour;
    }
    this.rate.conversationDuration = getDuration(lastMessageTime, firstMessageTime);
    this.rate.typeEntretien = this.getInterviewType();
    this.rateService.rateConversation(this.rate);

    this.rates[question].forEach((r, i) => {
      this.rates[question][i] = value >= i ? true : false;
    });
    this.setCanSendRate();

  }

  public setCanSendRate() {
    this.rate.typeEntretien = this.getInterviewType();
    this.canSendRate = this.rate.grades[0] !== undefined && this.rate.grades[1] !== undefined && !!this.getInterviewType() && !!this.rate.offerLinked;
  }

  public confirm() {
    if (this.rate !== undefined) {
      this.canSendRate = false;
      this.rateService
        .saveRate()
        .then(async () => {
          this.dialogRef.close();
          const isMono = !this.isMultiDevices;
          const user = this.settingsService.user.value;
          if (isMono) {
            const advisorRole = user.role;
            this.chatService.initChatMono(user.roomId, advisorRole);
          } else {
            this.chatService.updateChatStatus(user.roomId, false);
          }
          localStorage.setItem('isLogged', 'false');
          this.settingsService.reset();
          this.router.navigate(['thanks']);
        })
        .catch(() => {
          this.toastService.showToast(ERROR_FUNC_SEND_STATS.description, 'toast-error');
          this.dialogRef.close();
          setTimeout(() => {
            this.router.navigate(['thanks']);
          }, 3500);
        });
    }
  }

  onItemChange(value) {
    this.rate.offerLinked = value;
    this.setCanSendRate();
  }

  private getInterviewType(): string {
    if (this.typeEntretien === 'Autres') {
      return this.autreType;
    }
    return this.typeEntretien;
  }
}
