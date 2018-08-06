import { AuthProvider } from '@lifeworks/authentication';

export class TestingAuthProvider extends AuthProvider {
	private _isAuthenticatedValue = false;
	private _getTokenValue = '';

	constructor() {
		super();
	}
	login() {
		return;
	}
	logout() {
		return;
	}
	isAuthenticated() {
		return this._isAuthenticatedValue;
	}
	getToken() {
		return this._getTokenValue;
	}

	setIsAuthenticated(value: boolean) {
		this._isAuthenticatedValue = value;
	}
	setGetTokenValue(value: string) {
		this._getTokenValue = value;
	}
}
