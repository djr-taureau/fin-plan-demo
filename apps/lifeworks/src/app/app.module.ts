import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {
	StoreRouterConnectingModule,
	routerReducer,
	RouterStateSerializer
} from '@ngrx/router-store';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { ApplicationRoutes, AuthConfig, NAVIGATION } from './configs';
import {
	FixedRouterSerializer,
	ConfigService,
	appInitializer,
	CONFIG_URL,
	APP_NAVIGATION,
	CoreModule
} from '@lifeworks/core';
import { AuthenticationModule } from '@lifeworks/authentication';

// tslint:disable-next-line
import { AzureAdAuthProviderModule } from '@lifeworks/authentication/providers/azure-ad-auth-provider';

@NgModule({
	declarations: [AppComponent],
	imports: [
		HttpClientModule,
		BrowserModule,
		HttpClientModule,
		CoreModule,
		AzureAdAuthProviderModule,
		AuthenticationModule.forRoot(AuthConfig),
		NxModule.forRoot(),
		RouterModule.forRoot(ApplicationRoutes, {
			initialNavigation: 'enabled'
		}),
		StoreModule.forRoot(
			{ route: routerReducer },
			{
				initialState: {},
				metaReducers: !environment.production ? [storeFreeze] : []
			}
		),
		EffectsModule.forRoot([]),
		!environment.production ? StoreDevtoolsModule.instrument() : [],
		StoreRouterConnectingModule.forRoot({ stateKey: 'router' })
	],
	providers: [
		ConfigService,
		{ provide: APP_NAVIGATION, useValue: NAVIGATION },
		{
			useFactory: appInitializer,
			provide: APP_INITIALIZER,
			multi: true,
			deps: [ConfigService]
		},
		{ provide: RouterStateSerializer, useClass: FixedRouterSerializer },
		{ provide: CONFIG_URL, useValue: environment.configUrl }
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
