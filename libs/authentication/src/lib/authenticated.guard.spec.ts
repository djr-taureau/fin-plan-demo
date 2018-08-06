import { TestBed, async, inject, tick, fakeAsync } from '@angular/core/testing';

import { AuthenticatedGuard } from './authenticated.guard';
import { AUTH_PROVIDER, AuthProvider } from './auth-provider';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Component, Type } from '@angular/core';

describe('AuthenticatedGuard', () => {
	const provider = jasmine.createSpyObj<AuthProvider>('provider', [
		'login',
		'logout',
		'isAuthenticated'
	]);
	let router: Router;
	const routeToComponent = Component({ template: '' })(class MockClass {});

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				RouterTestingModule.withRoutes([
					{
						path: 'home',
						component: routeToComponent,
						canActivate: [AuthenticatedGuard]
					}
				])
			],
			declarations: [routeToComponent],
			providers: [
				AuthenticatedGuard,
				{ provide: AUTH_PROVIDER, useValue: provider }
			]
		});
		router = TestBed.get(Router);
		router.initialNavigation();
	});

	it(
		'should ...',
		inject([AuthenticatedGuard], (guard: AuthenticatedGuard) => {
			expect(guard).toBeTruthy();
		})
	);

	it('should block the route', async () => {
		//const a = await router.navigate(['home'])
	});
});
