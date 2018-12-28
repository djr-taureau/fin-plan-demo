import { AuthProvider } from '../providers';
import { assoc } from 'ramda';
import { EventEmitter } from '@angular/core';

function buildEventEmitter(name: string) {
	return jasmine.createSpyObj<EventEmitter<any>>(name, ['subscribe']);
}

function buildAuthProvider() {
	let mock = jasmine.createSpyObj<AuthProvider>('AuthProvider', [
		'getToken',
		'isAuthenticated',
		'login',
		'logout',
		// 'AuthProviderMock'
	]);

	mock = assoc('onAuthenticated', buildEventEmitter('onAuthenticated'), mock);
	mock = assoc(
		'onAuthenticateError',
		buildEventEmitter('onAuthenticateError'),
		mock
	);

	return mock;
}

export const AuthProviderMock = buildAuthProvider();
