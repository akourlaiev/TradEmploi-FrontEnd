import { ERROR_FUNC_UNAUTHORIZEDMICRO } from './../../../../models/error/errorFunctionnal';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, EventEmitter, Input, OnInit, Output, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { VOCABULARY, VOCABULARY_DEFAULT } from 'src/app/data/vocabulary';
import { Stream } from 'src/app/models/stream';
import { Message } from 'src/app/models/translate/message';
import { AudioRecordingService } from 'src/app/services/audio-recording.service';
import { AdvisorDefaultName, SettingsService } from 'src/app/services/settings.service';
import { SpeechRecognitionService } from 'src/app/services/speech-recognition.service';
import { TextToSpeechService } from 'src/app/services/text-to-speech.service';
import { ToastService } from 'src/app/services/toast.service';
import { ChatService } from 'src/app/services/chat.service';
import { Role } from 'src/app/models/role';
import { User } from 'src/app/models/user';
import { MessageWrapped } from '../../../../models/translate/message-wrapped';
import { TranslationMode } from 'src/app/models/kpis/translationMode';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-message-wrapper',
  templateUrl: './message-wrapper.component.html',
  styleUrls: ['./message-wrapper.component.scss'],
})
export class MessageWrapperComponent implements OnInit, OnChanges {
  @Input() title: string;
  @Input() role: string;
  @Input() originText: string;

  @Output() messagesToEmit = new EventEmitter<MessageWrapped>();

  public rawText: string;
  public sendBtnValue: string;
  public flag: string;
  public languageOrigin: string;
  public rawSpeech: HTMLAudioElement;
  public translatedSpeech: HTMLAudioElement;
  public translatedText: string = '';
  public micro: boolean = false;
  public error: boolean = false;
  public isReady: { listenTranslation: boolean; listenSpeech: boolean } = { listenTranslation: false, listenSpeech: false };
  public interim: string = '';
  public recordMode: boolean = false;
  public speak: boolean = false;
  public translationMode: string = TranslationMode.TEXT;
  public languageName: string;

  private isMobile: boolean = false;

  constructor(
    private toastService: ToastService,
    private settingsService: SettingsService,
    private audioRecordingService: AudioRecordingService,
    public textToSpeechService: TextToSpeechService,
    public router: Router,
    private breakpointObserver: BreakpointObserver,
    private speechRecognitionService: SpeechRecognitionService,
    private chatService: ChatService,
    private errorService: ErrorService
  ) {}

  ngOnInit(): void {
    this.languageOrigin = this.role === Role.ADVISOR ? this.settingsService.defaultLanguage.written : this.settingsService.user.value.language.written;
    this.languageName = this.settingsService.user.value.language.languageName;
    const isLanguageExist = VOCABULARY.some((item) => item.isoCode === this.settingsService.user.value.language.written);
    const data = isLanguageExist || this.role === Role.ADVISOR ? VOCABULARY.find((item) => item.isoCode === this.languageOrigin) : VOCABULARY_DEFAULT;
    this.title = data.sentences.translationH2;
    this.sendBtnValue = data.sentences.send;
    this.flag = data.isoCode.split('-')[1].toLowerCase();
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe((result) => {
      this.isMobile = result.matches;
    });
  }

  ngOnChanges() {
    if (this.originText) {
      this.rawText = this.originText;
    }
  }

  public async talk(): Promise<void> {
    if ('webkitSpeechRecognition' in window) {
      this.micro = true;
      this.recordMode = this.settingsService.recordMode;
      if (!this.recordMode) {
        this.rawText = '';
        this.stream();
      }
      this.translationMode = TranslationMode.VOCAL;
      this.speak = true;
    } else {
      this.toastService.showToast(ERROR_FUNC_UNAUTHORIZEDMICRO.description, 'toast-info');
      this.errorService.save(ERROR_FUNC_UNAUTHORIZEDMICRO);
    }
  }

  private stream() {
    let saveText = '';
    this.speechRecognitionService.record(this.languageOrigin).subscribe((value: Stream) => {
      if (this.isMobile) {
        this.rawText = value.final;
      } else {
        if (value.interim !== '') {
          this.rawText += '  .';
        } else {
          this.rawText = saveText + value.final;
          saveText = this.rawText;
        }
      }
    });
  }

  public exitStream() {
    this.speechRecognitionService.DestroySpeechObject();
    this.speak = false;
    setTimeout(() => {
      this.send(false);
    }, 2000);
  }
  public delete(): void {
    this.rawText = '';
  }

  public async send(fromKeyBoard?: boolean, messageAudio?: string): Promise<void> {
    if (this.rawText !== '') {
      const user = this.settingsService.user.value;
      const message = messageAudio === undefined ? this.rawText : messageAudio;
      if (user.isMultiDevices) {
        this.sendToMultiDevices(user, message);
      } else {
        this.sendToOneDevice(message);
      }
      this.rawText = '';
      this.translationMode = TranslationMode.TEXT;
      this.speak = false;
    }
  }

  public listen(value: 'translation' | 'speech'): void {
    if (value === 'speech') {
      this.audioRecordingService.audioSpeech.play();
    } else {
      this.translatedSpeech.play();
    }
  }

  public audioSending(message: string): void {
    this.micro = false;
    this.speak = false;
    this.recordMode = false;
    this.isReady.listenSpeech = true;
    this.rawText = undefined;
    if (message !== '') {
      this.send(false, message);
    }
  }

  public exitRecord() {
    this.micro = false;
    this.speak = false;
    this.recordMode = false;
  }

  private async sendToOneDevice(text: string) {
    const message = this.buildMessage(text);
    const messageWrapped: MessageWrapped = {
      message,
      time: Date.now(),
    };
    this.messagesToEmit.emit(messageWrapped);
  }

  private async sendToMultiDevices(user: User, text: string) {
    const message: Message = {
      ...this.buildMessage(text),
      member: user.firstname ? user.firstname : AdvisorDefaultName,
    };
    const messageWrapped: MessageWrapped = {
      message,
      time: Date.now(),
    };
    this.chatService.sendMessageWrapped(user.roomId, messageWrapped);
  }

  private buildMessage(text: string) {
    const date = new Date();
    return {
      time: Date.now(),
      date: date.toString(),
      hour: date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds(),
      languageOrigin: this.languageOrigin,
      languageName: this.languageName,
      flag: this.flag,
      role: this.role,
      text,
      translationMode: this.translationMode,
    };
  }
}
