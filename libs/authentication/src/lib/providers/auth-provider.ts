import { InjectionToken, EventEmitter } from '@angular/core';

export const AUTH_PROVIDER = new InjectionToken('AUTH_PROVIDER');
export const AUTH_CONFIG = new InjectionToken('AUTH_CONFIG');

export abstract class AuthProvider {
	onAuthenticated = new EventEmitter<any>();
	onAuthenticateError = new EventEmitter<any>();

	abstract login(returnUrl?: string): void;
	abstract logout(): void;
	isAuthenticated() {
		return false;
	}
	abstract getToken(): any;
}
