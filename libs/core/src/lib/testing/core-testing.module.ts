import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { ConfigService } from '../services';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AuthService } from '@lifeworks/authentication';
import { UiComponentsSideNavigationModule } from '@lifeworks/ui-components/side-navigation';
import { APP_NAVIGATION } from '@lifeworks/core';

import { ConfigServiceMock, AuthServiceMock } from './core-services.mock';

@NgModule({
	imports: [
		BrowserDynamicTestingModule,
		CommonModule,
		RouterTestingModule,
		HttpClientTestingModule,
		StoreModule.forRoot({}),
		EffectsModule.forRoot([]),
		UiComponentsSideNavigationModule
	],
	exports: [
		BrowserDynamicTestingModule,
		CommonModule,
		RouterTestingModule,
		HttpClientTestingModule,
		StoreModule,
		EffectsModule,
		UiComponentsSideNavigationModule
	],
	providers: [
		{ provide: ConfigService, useValue: ConfigServiceMock },
		{ provide: AuthService, useValue: AuthServiceMock },
		{ provide: APP_NAVIGATION, useValue: [] }
	]
})
export class CoreTestingModule {}
