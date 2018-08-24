import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
	MSAL_CONFIG,
	MsalService
} from '@azure/msal-angular/dist/msal.service';

import { AUTH_PROVIDER, AUTH_CONFIG } from '@lifeworks/authentication';
import { getFullUrl } from '@lifeworks/common';
import { AzureAdAuthProvider } from './azure-ad-auth.provider';
import {
	AzureADAuthProviderConfig,
	getAuthorityUri
} from './azure-ad-auth-config';
import { MsalConfig, BroadcastService } from '@azure/msal-angular';

@NgModule({
	imports: [CommonModule],
	providers: [
		{
			provide: MSAL_CONFIG,
			useFactory: msalConfigFactory,
			deps: [AUTH_CONFIG]
		},
		MsalService,
		BroadcastService,
		{ provide: AUTH_PROVIDER, useClass: AzureAdAuthProvider }
	]
})
export class AzureAdAuthProviderModule {}

export function msalConfigFactory(
	config: AzureADAuthProviderConfig
): MsalConfig {
	return {
		clientID: config.clientID,
		cacheLocation: 'localStorage',
		authority: getAuthorityUri(config.tenant, config.signUpSignInPolicy),
		// redirectUri,
		postLogoutRedirectUri: getFullUrl('/logout'),
		popUp: false,
		consentScopes: config.b2cScopes,
		isAngular: true
	};
}
