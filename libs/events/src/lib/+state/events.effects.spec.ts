import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { DataPersistence } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';
import { Observable, of } from 'rxjs';

import { EventsEffects } from './events.effects';
import { Load, LoadSuccess } from './events.actions';
import { EventsApiMock } from '../testing';
import { EventsApi } from '../services';


describe('NotesEffects', () => {
	let actions$: Observable<any>;
	let effects$: EventsEffects;
	const m_EventsApi = EventsApiMock;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				EventsEffects,
				DataPersistence,
				{
					provide: EventsApi,
					useValue: EventsApiMock
				},
				provideMockActions(() => actions$)
			]
		});

		effects$ = TestBed.get(EventsEffects);
	});

	describe('loadEvents', () => {
		it('should work', () => {
			m_EventsApi.get.and.returnValue(of({ results: [] }));

			actions$ = hot('-a-|', { a: new Load() });
			expect(effects$.loadEvents$).toBeObservable(
				hot('-a-|', {
					a: new LoadSuccess([], {} as any)
				})
			);
		});
	});
});
