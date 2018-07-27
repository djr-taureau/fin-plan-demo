import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as Msal from 'msal';
import { AzureADAuthProviderConfig, getAuthorityUri } from './azure-ad-auth-config';
import { logErrorToConsole, saveToStorage } from '@lifeworks/core';
import { AuthProvider, AUTH_CONFIG } from '@lifeworks/authentication';
import { getFullUrl } from '@lifeworks/utilities';



const TOKEN_KEY = "lifeworks_token";

@Injectable({
    providedIn: 'root'
})
export class AzureAdAuthProvider extends AuthProvider {
    provider: Msal.UserAgentApplication;

    constructor(@Inject(AUTH_CONFIG) private config: AzureADAuthProviderConfig) {
        super();

        this.provider = new Msal.UserAgentApplication(
            config.clientID,
            getAuthorityUri(config.tenant, config.signUpSignInPolicy),
            (errorDesc: any, token: any, error: any, tokenType: any) => {
                // todo: handle errors
                if (token) { saveToStorage(TOKEN_KEY, token); }
            },
            {
                navigateToLoginRequestUrl: false,
                redirectUri: getFullUrl('/processing-login'),
                postLogoutRedirectUri: getFullUrl('/logout'),
                cacheLocation: 'localStorage'
            }
        );
    }

    login() {
        this.provider.loginRedirect(this.config.b2cScopes)
    }

    logout() {
        this.provider.logout();
    };

    isAuthenticated() {
        return this.provider.getUser() != null;
    };

    async getToken() {
        try {
            return await this.provider.acquireTokenSilent(this.config.graphScopes);
        }
        catch(ex) {
            return await this.getTokenPopup()
        }
    }

    private async getTokenPopup() {
        try {
            return await this.provider.acquireTokenPopup(this.config.b2cScopes);
        } catch(ex) {
            return ''
        }
    }
}
