import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Configuration } from './configuration';
import { getConfigError } from '../error/error';


export const CONFIG_URL = '/config';

@Injectable()
export class ConfigService {
  config: Configuration;

  constructor(private http: HttpClient) { }

  load() {
    return this.http.get<Configuration>(CONFIG_URL)
      .toPromise()
      .then(result => this.config = result)
      .catch(() => { throw getConfigError() })
  }
}

export const appInitializer = (appConfig: ConfigService) =>
  () => appConfig.load()