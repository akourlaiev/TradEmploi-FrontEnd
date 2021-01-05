import { Component, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { VOCABULARY } from 'src/app/data/vocabulary';
import { ERROR_FUNC_TTS } from 'src/app/models/error/errorFunctionnal';
import { Vocabulary } from 'src/app/models/vocabulary';
import { SettingsService } from 'src/app/services/settings.service';
import { TextToSpeechService } from 'src/app/services/text-to-speech.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
    selector: 'app-language-grid',
    templateUrl: './language-grid.component.html',
    styleUrls: ['./language-grid.component.scss'],
})
export class LanguageGridComponent implements OnChanges{
    
    @Input() search: String;
    @Input() optionAll: Boolean;
    @Input() isGuest: Boolean;

    public countries: Vocabulary[] = [];
    public countriesSelected: string[] = ['en-GB', 'ar-XA', 'ps-AF', 'fa-IR', 'bn-BD', 'es-ES', 'de-DE', 'pt-PT', 'it-IT', 'zh-CN', 'ru-RU'];

    private audioClick:Boolean = false;

    constructor(
        private textToSpeechService: TextToSpeechService,  
        private toastService: ToastService,
        private settingsService: SettingsService,
        private router: Router
    ){}
    
    ngOnChanges() {
        this.optionAll ? this.getCountriesAll() : this.getCountriesSelected();
        if(this.search && this.search != ""){
            const searchName = this.search.trim().toLowerCase();
            this.countries = this.countries.filter(c => 
                c.languageNameFr.toLowerCase().indexOf(searchName) === 0 
                || c.countryNameFr.toLowerCase().indexOf(searchName) === 0 
                || c.languageNameRaw.toLowerCase().indexOf(searchName) === 0);
        }
    }

    public getCountriesSelected(){
        this.countries = this.countriesSelected.map((country) => VOCABULARY.find((i) => i.isoCode === country));
    }
    
    public getCountriesAll(){
        const data = VOCABULARY.filter((country) => country.isoCode !== 'ar-XA')
        this.countries = data.sort((a,b) => this.sortCountryNameFr(a.languageNameFr,b.languageNameFr));   
    }

    public isoCodeToFlag(isoCode: string) {
        return  isoCode.split('-')[1].toLowerCase()
    }
    
    public audioDescription(item: Vocabulary) {
        this.audioClick = true
        const audioLanguage = item.audioCode ? item.audioCode : item.isoCode;
        this.textToSpeechService.getSpeech(item.sentences.readedWelcome, audioLanguage).then(_ => {
            this.textToSpeechService.audioSpeech.play();
        }).catch(_ => {
            this.toastService.showToast(ERROR_FUNC_TTS.description, 'toast-error');
        });
    }

    public selectLanguage(item: Vocabulary): void {
        this.audioClick ? this.audioClick = false : this.goToTransation(item)
    }

    private goToTransation(item: Vocabulary){
        const audioLanguage = item.audioCode ? item.audioCode : item.isoCode;
        this.settingsService.user.next({ ...this.settingsService.user.value, language: { audio: audioLanguage, written: item.isoCode, languageName: item.languageNameFr }, connectionTime: Date.now() });
        if (this.isGuest) {
            const user = JSON.parse(sessionStorage.getItem('user'));
            user.language = { audio: audioLanguage, written: item.isoCode, languageName: item.languageNameFr };
            user.connectionTime = Date.now();
            sessionStorage.setItem('user', JSON.stringify(user));
        } else {
            const user = JSON.parse(localStorage.getItem('user'));
            user.language = { audio: audioLanguage, written: item.isoCode, languageName: item.languageNameFr };
            user.connectionTime = Date.now();
            localStorage.setItem('user', JSON.stringify(user));
        }
        this.router.navigate(['translation']);
    }

    private sortCountryNameFr (a: String, b: String) {  
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;  
    }
}