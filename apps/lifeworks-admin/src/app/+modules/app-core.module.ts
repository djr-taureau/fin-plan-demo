import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NxModule } from '@nrwl/nx';

import { AuthenticationModule } from '@lifeworks/authentication';
import { CoreModule, DocumentTitleModule } from '@lifeworks/core';
//tslint:disable-next-line:nx-enforce-module-boundaries
import { AzureAdAuthProviderModule } from '@lifeworks/authentication/providers/azure-ad-auth-provider';
import { AuthConfig } from '../configs';

const MODULES = [
	BrowserModule,
	BrowserAnimationsModule,
	NgCommonModule,
	HttpClientModule,
	CoreModule,
	AzureAdAuthProviderModule,
	AuthenticationModule
];

const ROOT_MODULES = [
	AuthenticationModule.forRoot(AuthConfig),
	NxModule.forRoot(),
	DocumentTitleModule
];

@NgModule({
	imports: [MODULES, ...ROOT_MODULES],
	exports: [MODULES, NxModule, AuthenticationModule]
})
export class AppCoreModule {}
