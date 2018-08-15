import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { DataPersistence } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';
import { Observable, of } from 'rxjs';

import { NotificationsEffects } from './notifications.effects';
import { Load, LoadSuccess } from './notifications.actions';
import { NotificationsApiMock } from '../testing';
import { NotificationsApi } from '../services';

describe('NotificationsEffects', () => {
	let actions$: Observable<any>;
	let effects$: NotificationsEffects;
	const m_NotificationsApi = NotificationsApiMock;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				NotificationsEffects,
				DataPersistence,
				{
					provide: NotificationsApi,
					useValue: NotificationsApiMock
				},
				provideMockActions(() => actions$)
			]
		});

		effects$ = TestBed.get(NotificationsEffects);
	});

	describe('loadNotifications', () => {
		it('should work', () => {
			m_NotificationsApi.get.and.returnValue(of({ results: [] }));

			actions$ = hot('-a-|', { a: new Load() });
			expect(effects$.loadNotifications$).toBeObservable(
				hot('-a-|', {
					a: new LoadSuccess([], {} as any)
				})
			);
		});
	});
});
