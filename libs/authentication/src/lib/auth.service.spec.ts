import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { AUTH_PROVIDER, AuthProvider } from './auth-provider';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { EventEmitter } from '@angular/core';
import { TestingAuthProvider } from '@lifeworks/authentication/providers/testing-auth-provider';

describe('AuthService', () => {
	let provider: AuthProvider;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [StoreModule.forRoot({}), EffectsModule.forRoot([])],
			providers: [
				AuthService,
				{ provide: AUTH_PROVIDER, useClass: TestingAuthProvider }
			]
		});

		provider = TestBed.get(AUTH_PROVIDER) as AuthProvider;
		spyOn(provider, 'isAuthenticated');
		spyOn(provider, 'login');
		spyOn(provider, 'logout');
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
