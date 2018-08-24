import { Injectable, InjectionToken, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { logErrorToConsole } from '@lifeworks/common';

import { AuthProvider, AUTH_PROVIDER } from '../providers';
import { Authenticated } from '../+state/auth.actions';
import { AuthStateDef } from '../+state/auth.interfaces';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	constructor(
		@Inject(AUTH_PROVIDER) private provider: AuthProvider,
		private store: Store<AuthStateDef>
	) {
		this.provider.onAuthenticated.subscribe(token => {
			this.store.dispatch(
				new Authenticated({
					id: token.oid,
					displayName: token.name,
					roles: [token.extension_lifeworks_role],
					permissions: []
				})
			);
		});
	}

	login(returnUrl?: string): void {
		this.provider.login();
	}

	logout(): void {
		this.provider.logout();
	}

	isAuthenticated() {
		return this.provider.isAuthenticated();
	}

	async getToken(): Promise<string> {
		return await this.provider.getToken();
	}
}
