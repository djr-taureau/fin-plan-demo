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
import { MsalService, BroadcastService } from '@azure/msal-angular';

@Injectable({
	providedIn: 'root'
})
export class AzureAdAuthProvider extends AuthProvider {
	constructor(
		@Inject(AUTH_CONFIG) private config: AzureADAuthProviderConfig,
		private msal: MsalService,
		private broadcastService: BroadcastService
	) {
		super();

		if (this.isAuthenticated()) {
			this.emitAuthenticated();
		}
	}

	@Timeout()
	emitAuthenticated() {
		this.onAuthenticated.emit(this.msal.getUser().idToken);
	}

	login(returnUrl?: string) {
		if (
			!this.msal._oauthData.isAuthenticated &&
			!this.msal._oauthData.userName
		) {
			this.freshLogin(returnUrl);
		} else if (
			!this.msal._oauthData.isAuthenticated &&
			this.msal._oauthData.userName
		) {
			this.tryTokenRefresh();
		}
	}

	private freshLogin(returnUrl = '/') {
		if (!this.msal._renewActive && !this.msal.loginInProgress()) {
			const loginStartPage = getFullUrl(returnUrl);
			if (loginStartPage !== null) {
				this.msal
					.getCacheStorage()
					.setItem('msal.angular.login.request', loginStartPage);
			}

			this.msal.loginRedirect(this.config.b2cScopes);
		}
	}

	private tryTokenRefresh() {
		this.msal.acquireTokenSilent([this.config.clientID]).then(
			(token: any) => {
				if (token) {
					this.msal._oauthData.isAuthenticated = true;
					// this.broadcastService.broadcast("msal:loginSuccess", token);
				}
			},
			(error: any) => {
				// this.broadcastService.broadcast("msal:loginFailure", {error});
			}
		);
	}

	logout() {
		this.msal.logout();
	}

	isAuthenticated() {
		this.msal.updateDataFromCache([this.config.clientID]);
		return (
			!!this.msal._oauthData.isAuthenticated &&
			!!this.msal._oauthData.userName
		);
	}

	async getToken() {}

	private async getTokenPopup() {}
}
