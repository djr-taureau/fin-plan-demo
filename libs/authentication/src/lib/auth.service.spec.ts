import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { AUTH_PROVIDER, AuthProvider } from './auth-provider';

describe('AuthService', () => {
	const provider = jasmine.createSpyObj<AuthProvider>('provider', [
		'login',
		'logout',
		'isAuthenticated'
	]);

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				AuthService,
				{ provide: AUTH_PROVIDER, useValue: provider }
			]
		});
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
