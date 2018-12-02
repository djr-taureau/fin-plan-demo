import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { DataPersistence } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';
import { Observable, of } from 'rxjs';

import { NotesEffects } from './notes.effects';
import { Load, LoadSuccess } from './notes.actions';
import { NotesApiMock } from '../testing';
import { NotesApi } from '../services';


describe('NotesEffects', () => {
	let actions$: Observable<any>;
	let effects$: NotesEffects;
	const m_NotesApi = NotesApiMock;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				NotesEffects,
				DataPersistence,
				{
					provide: NotesApi,
					useValue: NotesApiMock
				},
				provideMockActions(() => actions$)
			]
		});

		effects$ = TestBed.get(NotesEffects);
	});

	describe('loadNotes', () => {
		it('should work', () => {
			m_NotesApi.get.and.returnValue(of({ results: [] }));

			actions$ = hot('-a-|', { a: new Load() });
			expect(effects$.loadNotes$).toBeObservable(
				hot('-a-|', {
					a: new LoadSuccess([], {} as any)
				})
			);
		});
	});
});
