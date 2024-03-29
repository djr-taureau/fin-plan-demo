import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
	MAT_RIPPLE_GLOBAL_OPTIONS,
	RippleGlobalOptions
} from '@angular/material';
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


const globalRippleConfig: RippleGlobalOptions = { disabled: true };
@NgModule({
	declarations: [AppComponent],
	imports: [
		HttpClientModule,
		BrowserModule,
		HttpClientModule,
		CoreModule,
		BrowserAnimationsModule,
		AzureAdAuthProviderModule,
    AuthenticationModule.forRoot(AuthConfig),
		NxModule.forRoot(),
		RouterModule.forRoot(ApplicationRoutes, {
      initialNavigation: 'enabled',
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
		{ provide: CONFIG_URL, useValue: environment.configUrl },
		{ provide: MAT_RIPPLE_GLOBAL_OPTIONS, useValue: { disabled: true } }
	],
	bootstrap: [AppComponent],
	exports: [BrowserAnimationsModule]
})
export class AppModule {}
