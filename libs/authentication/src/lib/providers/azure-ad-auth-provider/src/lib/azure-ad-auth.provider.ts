import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as Msal from 'msal';
import {
	AzureADAuthProviderConfig,
	getAuthorityUri
} from './azure-ad-auth-config';
import { logErrorToConsole, saveToStorage, Timeout } from '@lifeworks/common';
import { AuthProvider, AUTH_CONFIG } from '@lifeworks/authentication';
import { getFullUrl } from '@lifeworks/common';
import { TimeoutError } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class AzureAdAuthProvider extends AuthProvider {
	provider: Msal.UserAgentApplication;

	constructor(
		@Inject(AUTH_CONFIG) private config: AzureADAuthProviderConfig
	) {
		super();

		this.provider = new Msal.UserAgentApplication(
			config.clientID,
			getAuthorityUri(config.tenant, config.signUpSignInPolicy),
			(errorDesc: string, token: any, error: any, tokenType: any) => {
				if (errorDesc) {
					this.emitAuthenticationError(error, errorDesc);
				}
			},
			{
				navigateToLoginRequestUrl: false,
				redirectUri: getFullUrl('/processing-login'),
				postLogoutRedirectUri: getFullUrl('/logout'),
				cacheLocation: 'localStorage'
			}
		);

		this.emitIfAuthenticated();
	}

	@Timeout()
	emitIfAuthenticated(token?: any) {
		if (this.isAuthenticated()) {
			this.onAuthenticated.emit(token || this.provider.getUser().idToken);
		}
	}

	@Timeout()
	emitAuthenticationError(err: any, description: string) {
		if (this.isAuthenticated) {
			this.onAuthenticateError.emit({
				err,
				description
			});
		}
	}

	login() {
		this.provider.loginRedirect(this.config.b2cScopes);
	}

	logout() {
		this.provider.logout();
	}

	isAuthenticated() {
		return this.provider.getUser() != null;
	}

	async getToken() {
		try {
			return await this.provider.acquireTokenSilent(
				this.config.graphScopes
			);
		} catch (ex) {
			return await this.getTokenPopup();
		}
	}

	private async getTokenPopup() {
		try {
			return await this.provider.acquireTokenPopup(this.config.b2cScopes);
		} catch (ex) {
			return '';
		}
	}
}
