import { Injectable, InjectionToken, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { path } from 'ramda';

import { Configuration } from './configuration';
import { getConfigError } from './config-errors';
import { isNotUseable } from '@lifeworks/common';

export const CONFIG_URL = new InjectionToken('CONFIG_URL');

@Injectable({
	providedIn: 'root'
})
export class ConfigService {
	config: Configuration;

	constructor(
		@Inject(CONFIG_URL) private configUrl: string,
		private http: HttpClient
	) {}

	load() {
		return this.http
			.get<Configuration>(this.configUrl)
			.toPromise()
			.then(result => (this.config = result))
			.catch(() => {
				throw getConfigError();
			});
	}

	getLifeworksApiUri() {
		if (isNotUseable(this.config)) throw getConfigError();

		return path(['apis', 'lifeworks'], this.config);
	}
}

export const appInitializer = (appConfig: ConfigService) => () =>
	appConfig.load();
