// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'core-js/es7/reflect';
import 'zone.js/dist/zone';
import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import {
	BrowserDynamicTestingModule,
	platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';
import { UiComponentsNavigationModule } from '@lifeworks/ui-components/navigation';
import { RouterTestingModule } from '@angular/router/testing';

// tslint:disable-next-line
import { TestingAuthProviderModule } from '@lifeworks/authentication/providers/testing-auth-provider';
import { HttpClientTestingModule } from '@angular/common/http/testing';

declare const require: any;

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
	[
		BrowserDynamicTestingModule,
		HttpClientTestingModule,
		UiComponentsNavigationModule,
		RouterTestingModule,
		TestingAuthProviderModule
	],
	platformBrowserDynamicTesting()
);
// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);
