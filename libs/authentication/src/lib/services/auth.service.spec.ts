import { TestBed, inject } from '@angular/core/testing';
import { EventEmitter } from '@angular/core';

import { AuthService } from './auth.service';
import { AUTH_PROVIDER, AuthProvider } from '../providers';
import { AuthProviderMock } from '../testing';

describe('AuthService', () => {
	let provider: AuthProvider;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				AuthService,
				{ provide: AUTH_PROVIDER, useValue: AuthProviderMock }
			]
		});

		provider = TestBed.get(AUTH_PROVIDER);
	});

	it(
		'should be created',
		inject([AuthService], (service: AuthService) => {
			expect(service).toBeTruthy();
		})
	);

	it(
		'should call provider functions',
		inject([AuthService], (service: AuthService) => {
			service.isAuthenticated();
			expect(provider.isAuthenticated).toHaveBeenCalled();

			service.login();
			expect(provider.login).toHaveBeenCalled();

			service.logout();
			expect(provider.logout).toHaveBeenCalled();
		})
	);
});
