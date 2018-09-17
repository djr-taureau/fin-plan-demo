import { NgModule } from '@angular/core';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ConfigService } from '@lifeworks/core';
import { ConfigServiceMock } from '../../../../core/src/lib/testing';

import { ClientsUIModule } from '../+modules';
import { PermissionsModule } from '@lifeworks/permissions';
import { NxModule } from '@nrwl/nx';

@NgModule({
	imports: [
		BrowserDynamicTestingModule,
		NoopAnimationsModule,
		StoreModule.forRoot({}),
		EffectsModule.forRoot([]),
		HttpClientTestingModule,
		RouterTestingModule,
		ClientsUIModule,
		PermissionsModule,
		NxModule.forRoot()
	],
	exports: [
		BrowserDynamicTestingModule,
		NoopAnimationsModule,
		StoreModule,
		EffectsModule,
		HttpClientTestingModule,
		RouterTestingModule,
		ClientsUIModule,
		PermissionsModule,
		NxModule
	],
	providers: [{ provide: ConfigService, useValue: ConfigServiceMock }]
})
export class ClientsTestingModule {}
