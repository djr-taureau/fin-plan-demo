import { Injectable, InjectionToken, Inject } from '@angular/core';
import { AuthProvider, AUTH_PROVIDER } from './auth-provider';
import { logErrorToConsole } from '@lifeworks/core';
import { Store } from '@ngrx/store';
import { Authenticated } from './+state/auth.actions';
import { AuthState } from './+state/auth.interfaces';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	constructor(
		@Inject(AUTH_PROVIDER) private provider: AuthProvider,
		private store: Store<AuthState>
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

	login(): void {
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
