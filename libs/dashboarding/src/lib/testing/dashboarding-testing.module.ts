import { NgModule } from '@angular/core';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DataPersistence } from '@nrwl/nx';

import { ConfigService } from '@lifeworks/core';
import { UserService } from '@lifeworks/authentication';
import { m_ConfigService, m_UserService } from './mock-services';

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
	providers: [
		DataPersistence,
		{ provide: UserService, useValue: m_UserService },
		{ provide: ConfigService, useValue: m_ConfigService }
	]
})
export class DashboardingTestingModule {}
