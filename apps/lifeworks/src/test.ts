// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import { AuthenticationModule } from '@lifeworks/authentication';

// tslint:disable-next-line
import { UiComponentsSideNavigationModule } from '@lifeworks/ui-components/side-navigation';

import {
	BrowserDynamicTestingModule,
	platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';
import { CoreModule } from '@lifeworks/core';

declare const require: any;

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
	[
		BrowserDynamicTestingModule,
		CoreModule,
		AuthenticationModule,
		UiComponentsSideNavigationModule
	],
	platformBrowserDynamicTesting()
);
// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);
