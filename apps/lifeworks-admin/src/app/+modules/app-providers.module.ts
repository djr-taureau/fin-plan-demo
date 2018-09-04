import { NgModule, APP_INITIALIZER } from '@angular/core';
import { environment } from '../../environments/environment';

import { NAVIGATION } from '../configs';
import {
	ConfigService,
	appInitializer,
	CONFIG_URL,
	APP_NAVIGATION
} from '@lifeworks/core';

@NgModule({
	providers: [
		{
			useFactory: appInitializer,
			provide: APP_INITIALIZER,
			multi: true,
			deps: [ConfigService]
		},
		{ provide: CONFIG_URL, useValue: environment.configUrl },
		{ provide: APP_NAVIGATION, useValue: NAVIGATION }
	]
})
export class AppProvidersModule {}
