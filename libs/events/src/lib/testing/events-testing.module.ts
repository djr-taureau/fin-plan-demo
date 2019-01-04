import { NgModule } from '@angular/core';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ConfigService } from '@lifeworks/core';

import { ConfigServiceMock } from '../../../../core/src/lib/testing';
import { EventsUiModule } from '../+modules/events-ui.module';


@NgModule({
	imports: [
		BrowserDynamicTestingModule,
		StoreModule.forRoot({}),
		EffectsModule.forRoot([]),
		HttpClientTestingModule,
		RouterTestingModule,
		EventsUiModule
	],
	exports: [
		BrowserDynamicTestingModule,
		StoreModule,
		EffectsModule,
		HttpClientTestingModule,
		RouterTestingModule,
		EventsUiModule
	],
	providers: [{ provide: ConfigService, useValue: ConfigServiceMock }]
})
export class EventsTestingModule {}
