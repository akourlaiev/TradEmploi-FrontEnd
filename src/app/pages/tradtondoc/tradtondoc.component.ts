import { NavbarService } from 'src/app/services/navbar.service';
import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { VOCABULARY } from 'src/app/data/vocabulary';
import { ToastService } from 'src/app/services/toast.service';
import { TextToSpeechService } from '../../services/text-to-speech.service';
import { TradTonDocService } from '../../services/trad-ton-doc.service';
import { TranslateService } from '../../services/translate.service';
import { LoaderComponent } from '../settings/loader/loader.component';
import { RateDialogComponent } from '../translation/dialogs/rate-dialog/rate-dialog.component';
import { SettingsService } from './../../services/settings.service';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-tradtondoc',
  templateUrl: './tradtondoc.component.html',
  styleUrls: ['./tradtondoc.component.scss'],
})
export class TradtondocComponent implements OnDestroy {
  private targetLanguage: string;
  public ocrForm = new FormGroup({
    file: new FormControl([null, [Validators.required]]),
  });

  imageChangedEvent: any;
  fileName: string;
  file: File;
  text: string;
  isConform: boolean;
  translatedText: string;
  audioFile: HTMLAudioElement;
  isPlaying: boolean = false;
  showAudioControls: boolean = false;
  croppedImage: string;
  isPdf: boolean = false;
  numberPagesDoc: number;
  private isAudioSupported: boolean;
  targetCountry: string;
  numberCharacters: number;

  constructor(
    private readonly dialog: MatDialog,
    private readonly translationService: TranslateService,
    private readonly textToSpeechService: TextToSpeechService,
    private readonly tradTonDocService: TradTonDocService,
    private readonly settingsService: SettingsService,
    private readonly toastService: ToastService,
    private readonly navService: NavbarService
  ) {
    this.navService.handleTabsTradTonDoc();
    this.settingsService.user.subscribe((user) => {
      if (user && user.language) {
        this.targetLanguage = user.language.written;
        this.targetCountry = user.language.written.split('-')[1].toLowerCase();
      }
    });
    const language = VOCABULARY.find((i) => i.isoCode === this.targetLanguage || i.audioCode === this.targetLanguage);
    this.isAudioSupported = language.sentences.audioSupported !== undefined;
  }

  ngOnDestroy() {
    if (this.textToSpeechService.audioSpeech) {
      this.textToSpeechService.stop();
    }
  }

  async onSubmit() {
    if (this.file && this.fileName) {
      const loaderDialog = this.dialog.open(LoaderComponent, { panelClass: 'loader', disableClose: true });
      const result = await this.tradTonDocService
        .detectText(this.fileName, this.croppedImage ? this.croppedImage : this.file)
        .catch((err) => {
          loaderDialog.close();
          this.toastService.showToast('Une erreur est survenue, veuillez réessayer plus tard', 'toast-error');
          console.log(err);
        })
        .finally(() => loaderDialog.close());
      this.croppedImage = null;
      this.text = result ? result.text : '';
      this.numberCharacters = result ? result.numberCharactersInText : 0;
      this.isConform = this.checkNumberCharacters(this.numberCharacters);
      if (this.text.length > 0) {
        this.translatedText = await this.translationService.translate(this.text, this.targetLanguage);
        if (this.isAudioSupported) {
          await this.textToSpeechService
            .play(this.translatedText, this.targetLanguage, false)
            .then((_) => {
              this.audioFile = this.textToSpeechService.audioSpeech;
              this.showAudioControls = true;
            })
            .catch((err) => {
              this.toastService.showToast("L'audio n'a pas pu être generé.", 'toast-error');
              console.log(err);
            });
        }
        loaderDialog.close();
      }
    }
  }

  resume() {
    this.isPlaying = !this.isPlaying;
    this.audioFile.play();
    this.audioFile.onended = () => {
      this.isPlaying = false;
    };
  }

  pause() {
    this.isPlaying = !this.isPlaying;
    this.audioFile.pause();
  }

  @HostListener('window:unload')
  public canDeactivate(): any {
    localStorage.setItem('isLogged', 'false');
    this.settingsService.reset();
  }

  public evaluate() {
    return this.dialog.open(RateDialogComponent, {
      width: '750px',
      height: '750px',
      panelClass: 'customDialog',
      disableClose: false,
      data: {
        tradtondoc: true,
      },
    });
  }

  imageCropped($event: ImageCroppedEvent) {
    this.croppedImage = $event.base64;
    this.translatedText = null;
  }
  onFileDropped($event) {
    const file = $event;
    this.isConform = false;
    this.isPdf = false;
    this.prepareFile(file);
    this.applyControls(file);
    this.imageChangedEvent = { target: { files: [file] } };
  }

  fileBrowseHandler($event) {
    const files = $event.target.files[0];
    this.prepareFile(files);
    this.applyControls(files);
    this.imageChangedEvent = $event;
  }

  applyControls(file) {
    if (file.type === 'application/pdf') {
      this.isPdf = true;
      this.isConform = this.checkFileSize(file.size) && this.checkTypeFile(file.type);
      this.assertOnePage();
    } else {
      this.isPdf = false;
      this.isConform = this.checkFileSize(file.size) && this.checkTypeFile(file.type);
    }
  }

  checkTypeFile(type) {
    const allowedTypes = ['application/pdf', 'image/png', 'image/jpeg', 'image/jpg'];
    if (!allowedTypes.includes(type)) {
      this.toastService.showToast('Fichier non conforme. Ce type de fichier n\'est pas pris en charge', 'toast-warning');
      return false;
    }
    return true;
  }

  checkFileSize(size) {
    if (size > 10485760) {
      // 10Mo
      this.toastService.showToast('Fichier non conforme. Le fichier est trop lourd !', 'toast-warning');
      return false;
    }
    return true;
  }

  assertOnePage() {
    const reader = new FileReader();
    reader.readAsBinaryString(this.file);
    reader.onloadend = () => {
      this.numberPagesDoc = (reader.result as string).match(/\/Type[\s]*\/Page[^s]/g).length;
      if (this.numberPagesDoc > 1) {
        this.toastService.showToast('Fichier non conforme. Le PDF fourni contient plus d\'une page ', 'toast-warning');
        this.isConform = false;
      } else {
        this.isConform = true;
      }
    };
  }

  checkNumberCharacters(numberCharacters) {
    if (numberCharacters > 10000) {
      this.toastService.showToast('Fichier non conforme. Le fichier contient trop de caractères !', 'toast-warning');
      return false;
    }
    return true;
  }

  prepareFile(file: any) {
    this.file = file;
    this.showAudioControls = false;
    this.translatedText = null;
    this.fileName = this.file.name;
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.file = e.target.result;
    };
    reader.readAsDataURL(this.file);
  }
}
