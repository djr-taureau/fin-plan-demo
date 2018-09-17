import { NgModule } from '@angular/core';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ConfigService } from '@lifeworks/core';
import { ConfigServiceMock } from '../../../../core/src/lib/testing';

import { PermissionsUIModule } from '../+modules';

@NgModule({
	imports: [
		BrowserDynamicTestingModule,
		NoopAnimationsModule,
		StoreModule.forRoot({}),
		EffectsModule.forRoot([]),
		HttpClientTestingModule,
		RouterTestingModule,
		PermissionsUIModule
	],
	exports: [
		BrowserDynamicTestingModule,
		NoopAnimationsModule,
		StoreModule,
		EffectsModule,
		HttpClientTestingModule,
		RouterTestingModule,
		PermissionsUIModule
	],
	providers: [{ provide: ConfigService, useValue: ConfigServiceMock }]
})
export class PermissionsTestingModule {}
