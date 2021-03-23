import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';
import { ErrorService } from './error.service';
import { ERROR_TECH_STT } from '../models/error/errorTechnical';
import { ERROR_FUNC_NOSOUND } from '../models/error/errorFunctionnal';
import { TokenBrokerService } from './token-broker.service';
import { TokenResponse } from '../models/token/tokensResponse';
import { JwtFbSingleton } from '../models/token/JwtFbSingleton';
@Injectable({
  providedIn: 'root',
})
export class SpeechToTextSyncService {
  constructor(private errorService: ErrorService, private tbs: TokenBrokerService) {}

  recognizeSync = async (audioBytes: any, language: string): Promise<string> => {
    // add role handler.
    const tokenResponse: TokenResponse = await this.tbs.getTokenAdmin(JwtFbSingleton.getInstance().getToken().token);
    if (audioBytes !== null || audioBytes !== undefined) {
      const urlRecognize: string = `https://speech.googleapis.com/v1/speech:recognize?key=${environment.gcp.apiKey}`;
      const data = {
        config: {
          encoding: 'FLAC',
          sampleRateHertz: 44100,
          languageCode: language,
        },
        audio: {
          content: audioBytes,
        },
      };
      return axios({
        method: 'post',
        headers: { Authorization: `Bearer ${tokenResponse.tokenGCP}`, 'content-type': 'application/json; charset=utf-8' },
        url: urlRecognize,
        timeout: 60000,
        data,
      })
        .then((response) => {
          if (response.data.results !== undefined) {
            return response.data.results[0].alternatives[0].transcript;
          }
          return ERROR_FUNC_NOSOUND.description;
        })
        .catch((error) => {
          this.errorService.save(ERROR_TECH_STT);
          throw new Error(error);
        });
    }
  };
}
