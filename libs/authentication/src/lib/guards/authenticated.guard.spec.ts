import { TestBed, async, inject, tick, fakeAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Component, Type } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AuthenticatedGuard } from './authenticated.guard';
import { AUTH_PROVIDER, AuthProvider } from '../providers';
import { AuthProviderMock } from '../testing';

describe('AuthenticatedGuard', () => {
	let router: Router;
	let provider: AuthProvider;
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
				{ provide: AUTH_PROVIDER, useValue: AuthProviderMock }
			]
		});
		router = TestBed.get(Router);
		router.initialNavigation();
		provider = TestBed.get(AUTH_PROVIDER);
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
