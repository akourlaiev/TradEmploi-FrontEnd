import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AfterViewInit, Component, EventEmitter, HostListener, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { VOCABULARY, VOCABULARY_DEFAULT } from 'src/app/data/vocabulary';
import { Stream } from 'src/app/models/stream';
import { Message } from 'src/app/models/translate/message';
import { AudioRecordingService } from 'src/app/services/audio-recording.service';
import { AdvisorDefaultName, SettingsService } from 'src/app/services/settings.service';
import { SpeechRecognitionService } from 'src/app/services/speech-recognition.service';
import { ToastService } from 'src/app/services/toast.service';
import { ChatService } from 'src/app/services/chat.service';
import { Role } from 'src/app/models/role';
import { User } from 'src/app/models/user';
import { MessageWrapped } from '../../../../models/translate/message-wrapped';
import { TranslationMode } from 'src/app/models/kpis/translationMode';
import { ErrorService } from 'src/app/services/error.service';
import { isIOS } from 'src/app/utils/utils';
import { RecordingState } from '../../../../models/RecordingState';
import { SpeechToTextMicrosoftService } from '../../../../services/speech-to-text-microsoft';
import { ERROR_FUNC_UNAUTHORIZEDMICRO } from '../../../../models/error/errorFunctionnal';
import { environment } from '../../../../../environments/environment';
import { ERROR_TECH_UNAUTHORIZEDMICRO } from '../../../../models/error/errorTechnical';
import { Vocabulary } from '../../../../models/vocabulary';
import { VOCABULARY_AZURE } from '../../../../data/vocabulary-microsoft-azure';

@Component({
  selector: 'app-message-wrapper',
  templateUrl: './message-wrapper.component.html',
  styleUrls: ['./message-wrapper.component.scss']
})
export class MessageWrapperComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() role: string;
  @Input() originText: string;

  @Output() messagesToEmit = new EventEmitter<MessageWrapped>();

  public rawText: string = '';
  public sendBtnValue: string;
  public flag: string;
  public languageOrigin: string;
  public translatedSpeech: HTMLAudioElement;
  public micro: boolean = false;
  public error: boolean = false;
  public isReady: { listenTranslation: boolean; listenSpeech: boolean } = {
    listenTranslation: false,
    listenSpeech: false
  };
  public interim: string = '';
  public recordMode: boolean = false;
  public speaking: boolean = false;
  public canSend: boolean = false;
  public translationMode: string = TranslationMode.TEXT;
  public languageName: string;
  public isIOS: boolean = false;
  public voiceNotSupported: boolean = false;
  public seconds: number;
  private isMobile: boolean = false;
  private isTablet: boolean = false;
  private recordingState: RecordingState = RecordingState.STOPPED;
  private useSpeechToTextMicrosoftApi: boolean;
  private vocabulary: Vocabulary[];


  constructor(
    private toastService: ToastService,
    private settingsService: SettingsService,
    private audioRecordingService: AudioRecordingService,
    public router: Router,
    private breakpointObserver: BreakpointObserver,
    private speechRecognitionService: SpeechRecognitionService,
    private chatService: ChatService,
    private errorService: ErrorService,
    private speechToTextMicrosoftService: SpeechToTextMicrosoftService
  ) {
  }

  ngOnInit(): void {
    this.isIOS = isIOS();
    this.languageOrigin = this.role === Role.ADVISOR ? this.settingsService.defaultLanguage.written : this.settingsService.user.value.language.written;
    this.languageName = this.settingsService.user.value.language.languageName;
    if (environment.microsoftSpeechConfig.enabled){
      this.vocabulary = VOCABULARY_AZURE;
    }else{
      this.vocabulary = VOCABULARY;
    }
    const isLanguageExist = this.vocabulary.some((item) => item.isoCode === this.settingsService.user.value.language.written);
    const data = isLanguageExist || this.role === Role.ADVISOR ? this.vocabulary.find((item) => item.isoCode === this.languageOrigin) : VOCABULARY_DEFAULT;
    const translationPlaceHolderIos = this.role === Role.ADVISOR ? data.sentences.translationH2Ios : VOCABULARY_DEFAULT.sentences.translationH2Ios;
    this.interim = this.settingsService.recordMode ? data.sentences.translationH2Mobile : this.isIOS ? translationPlaceHolderIos : data.sentences.translationH2;
    this.sendBtnValue = data.sentences.send;
    this.voiceNotSupported = data.sentences.voiceNotSupported ? data.sentences.voiceNotSupported : false;
    this.flag = data.isoCode.split('-')[1].toLowerCase();
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe((result) => {
      this.isMobile = result.matches;
    });
    this.useSpeechToTextMicrosoftApi = environment.microsoftSpeechConfig.enabled;
    this.isTablet = this.settingsService.isTablet;
  }

  ngOnChanges() {
    if (this.originText) {
      this.rawText = this.originText;
    }
  }

  ngAfterViewInit() {
    const textArea = document.getElementById('msg-wrapper-advisor');
    if (!this.isTablet && !this.isMobile && textArea) {
      textArea.focus();
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
      this.speaking = true;
    } else {
      this.toastService.showToast(ERROR_FUNC_UNAUTHORIZEDMICRO.description, 'toast-warning');
      this.errorService.save(ERROR_TECH_UNAUTHORIZEDMICRO);
    }
  }

  public async talkWithMicrosoft(): Promise<void> {
    this.micro = true;
    this.rawText = '';
    this.isMobile = false;
    this.streamWithMicrosoft();

    this.translationMode = TranslationMode.VOCAL;
    this.speaking = true;
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

  private streamWithMicrosoft() {
    let saveText = '';
    this.speechToTextMicrosoftService.recognize(this.transcodificationMicrosoft(this.languageOrigin)).subscribe((value: Stream) => {
      if (value.interim !== '') {
        this.rawText = value.interim;
      } else if (value.final !== '') {
        this.rawText = saveText + value.final;
        saveText = this.rawText;
      } else if (value.interim === '' && value.final === '') {
        this.onStop();
      }
    });
  }

  private transcodificationMicrosoft(language: string): string {
    if (environment.microsoftSpeechConfig.enabled) {
      if (language === 'ar-XA') {
        return 'ar-EG';
      }
    }
    return language;
  }

  public delete(): void {
    this.rawText = '';
    this.canSend = false;
    this.speaking = false;
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
      this.canSend = false;
      this.speaking = false;
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
    this.speaking = false;
    this.recordMode = false;
    this.isReady.listenSpeech = true;
    this.rawText = undefined;
    if (message !== '') {
      this.send(false, message);
    }
  }

  public exitRecord() {
    this.micro = false;
    this.speaking = false;
    this.recordMode = false;
  }

  public displaySendOnClick() {
    this.canSend = true;
  }

  public displaySendOnKeyPress() {
    this.canSend = true;
  }

  public displaySendOnBlur() {
    if (this.rawText === undefined || this.rawText === '') {
      this.canSend = false;
    }
  }

  onHold(time) {
    this.recordingState = RecordingState.RECORDING;
    this.seconds = Math.round(time / 1000);
  }

  onStart() {
    if (this.recordingState === RecordingState.RECORDING) {
      return;
    }
    this.recordingState = RecordingState.RECORDING;
    if (this.useSpeechToTextMicrosoftApi) {
      this.talkWithMicrosoft();
    } else {
      this.talk();
    }
  }

  @HostListener('window:mouseup', ['$event'])
  mouseUp(event) {
    if (!this.isMobile && !this.isTablet && this.recordingState === RecordingState.RECORDING) {
      this.onStop();
    }
  }

  onStop() {
    this.recordingState = RecordingState.STOPPED;
    if (this.rawText) {
      this.canSend = true;
    }
    this.exitRecord();
    if (this.useSpeechToTextMicrosoftApi) {
      this.speechToTextMicrosoftService.stopContinuousRecognitionAsync();
    } else {
      this.speechRecognitionService.DestroySpeechObject();
    }
    this.speaking = false;
    this.seconds = 0;
  }

  private async sendToOneDevice(text: string) {
    const message = this.buildMessage(text);
    const messageWrapped: MessageWrapped = {
      message,
      time: Date.now()
    };
    this.messagesToEmit.emit(messageWrapped);
  }

  private async sendToMultiDevices(user: User, text: string) {
    const message: Message = {
      ...this.buildMessage(text),
      member: user.firstname ? user.firstname : AdvisorDefaultName
    };
    const messageWrapped: MessageWrapped = {
      message,
      time: Date.now()
    };
    await this.chatService.sendMessageWrapped(user.roomId, messageWrapped);
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
      translationMode: this.translationMode
    };
  }
}
