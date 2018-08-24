import { NgModule } from '@angular/core';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AUTH_PROVIDER, AuthProvider } from '../providers';
import { AuthProviderMock } from './authentication-services.mock';

@NgModule({
	imports: [
		BrowserDynamicTestingModule,
		StoreModule.forRoot({}),
		EffectsModule.forRoot([]),
		HttpClientTestingModule,
		RouterTestingModule
	],
	exports: [
		BrowserDynamicTestingModule,
		StoreModule,
		EffectsModule,
		HttpClientTestingModule,
		RouterTestingModule
	],
	providers: [{ provide: AUTH_PROVIDER, useValue: AuthProviderMock }]
})
export class AuthenticationTestingModule {}
