import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { ConfigService } from '../config';
import { ConfigServiceMock, AuthServiceMock } from './core-services.mock';
import { AuthService } from '@lifeworks/authentication';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { APP_NAVIGATION } from '../navigation';

@NgModule({
	imports: [
		BrowserDynamicTestingModule,
		CommonModule,
		RouterTestingModule,
		HttpClientTestingModule,
		StoreModule.forRoot({}),
		EffectsModule.forRoot([])
	],
	exports: [
		BrowserDynamicTestingModule,
		CommonModule,
		RouterTestingModule,
		HttpClientTestingModule,
		StoreModule,
		EffectsModule
	],
	providers: [
		{ provide: ConfigService, useValue: ConfigServiceMock },
		{ provide: AuthService, useValue: AuthServiceMock },
		{ provide: APP_NAVIGATION, useValue: [] }
	]
})
export class CoreTestingModule {}
