import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { DataPersistence } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';
import { Observable, of } from 'rxjs';

import { TasksEffects } from './tasks.effects';
import { Load, LoadSuccess } from './tasks.actions';
import { TasksApiMock } from '../testing';
import { TasksApi } from '../services';


describe('NotesEffects', () => {
	let actions$: Observable<any>;
	let effects$: TasksEffects;
	const m_TasksApi = TasksApiMock;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				TasksEffects,
				DataPersistence,
				{
					provide: TasksApi,
					useValue: TasksApiMock
				},
				provideMockActions(() => actions$)
			]
		});

		effects$ = TestBed.get(TasksEffects);
	});

	describe('loadTasks', () => {
		it('should work', () => {
			m_TasksApi.get.and.returnValue(of({ results: [] }));

			actions$ = hot('-a-|', { a: new Load() });
			expect(effects$.loadNotes$).toBeObservable(
				hot('-a-|', {
					a: new LoadSuccess([], {} as any)
				})
			);
		});
	});
});
