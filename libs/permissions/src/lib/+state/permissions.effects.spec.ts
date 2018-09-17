import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { DataPersistence } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';
import { Observable, of } from 'rxjs';

import { PermissionsEffects } from './permissions.effects';
import { Load, LoadSuccess } from './permissions.actions';
import { PermissionsApiMock } from '../testing';
import { PermissionsApi } from '../services';

describe('PermissionsEffects', () => {
	let actions$: Observable<any>;
	let effects$: PermissionsEffects;
	const m_PermissionsApi = PermissionsApiMock;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				PermissionsEffects,
				DataPersistence,
				{
					provide: PermissionsApi,
					useValue: PermissionsApiMock
				},
				provideMockActions(() => actions$)
			]
		});

		effects$ = TestBed.get(PermissionsEffects);
	});

	describe('loadPermissions', () => {
		it('should work', () => {
			m_PermissionsApi.get.and.returnValue(of({ results: [] }));

			actions$ = hot('-a-|', { a: new Load() });
			expect(effects$.loadPermissions$).toBeObservable(
				hot('-a-|', {
					a: new LoadSuccess([], {} as any)
				})
			);
		});
	});
});
