import { TestBed, async, inject, tick, fakeAsync } from '@angular/core/testing';

import { AuthenticatedGuard } from './authenticated.guard';
import { AUTH_PROVIDER, AuthProvider } from './auth-provider';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Component, Type } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TestingAuthProvider } from '@lifeworks/authentication/providers/testing-auth-provider';

describe('AuthenticatedGuard', () => {
	let router: Router;
	let provider: AuthProvider;
	const routeToComponent = Component({ template: '' })(class MockClass {});

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				StoreModule.forRoot({}),
				EffectsModule.forRoot([]),
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
				{ provide: AUTH_PROVIDER, useClass: TestingAuthProvider }
			]
		});
		router = TestBed.get(Router);
		router.initialNavigation();
		provider = TestBed.get(AUTH_PROVIDER) as AuthProvider;
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
