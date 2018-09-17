import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { DataPersistence } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';
import { Observable, of } from 'rxjs';

import { ClientsEffects } from './clients.effects';
import { Load, LoadSuccess } from './clients.actions';
import { ClientsApiMock } from '../testing';
import { ClientsApi } from '../services';

describe('ClientsEffects', () => {
	let actions$: Observable<any>;
	let effects$: ClientsEffects;
	const m_ClientsApi = ClientsApiMock;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				ClientsEffects,
				DataPersistence,
				{
					provide: ClientsApi,
					useValue: ClientsApiMock
				},
				provideMockActions(() => actions$)
			]
		});

		effects$ = TestBed.get(ClientsEffects);
	});

	describe('loadClients', () => {
		it('should work', () => {
			m_ClientsApi.get.and.returnValue(of({ results: [] }));

			actions$ = hot('-a-|', { a: new Load() });
			expect(effects$.loadClients$).toBeObservable(
				hot('-a-|', {
					a: new LoadSuccess([], {} as any)
				})
			);
		});
	});
});
