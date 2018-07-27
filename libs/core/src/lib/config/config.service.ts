import { Injectable, InjectionToken, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Configuration } from './configuration';
import { getConfigError } from '../error/error';


export const CONFIG_URL = new InjectionToken('CONFIG_URL');

@Injectable()
export class ConfigService {
  config: Configuration;

  constructor(@Inject(CONFIG_URL) private configUrl: string, private http: HttpClient) { }

  load() {
    return this.http.get<Configuration>(this.configUrl)
      .toPromise()
      .then(result => this.config = result)
      .catch(() => { throw getConfigError() })
  }
}

export const appInitializer = (appConfig: ConfigService) =>
  () => appConfig.load()