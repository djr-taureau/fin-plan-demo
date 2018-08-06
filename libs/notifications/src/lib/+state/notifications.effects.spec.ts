import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';
import { DataPersistence } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';

import { NotificationsEffects } from './notifications.effects';
import { Load, LoadSuccess } from './notifications.actions';

import { NotificationsService } from '../notifications.service';

import { Observable, of } from 'rxjs';

describe('NotificationsEffects', () => {
	let actions$: Observable<any>;
	let effects$: NotificationsEffects;
	const getNotificationsSpyFn = jasmine.createSpy('get');

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [StoreModule.forRoot({})],
			providers: [
				NotificationsEffects,
				DataPersistence,
				provideMockActions(() => actions$),
				{
					provide: NotificationsService,
					useValue: { get: getNotificationsSpyFn }
				}
			]
		});

		effects$ = TestBed.get(NotificationsEffects);
	});

	describe('loadNotifications', () => {
		it('should work', () => {
			getNotificationsSpyFn.and.returnValue(of({ results: [] }));
			actions$ = hot('-a-|', { a: new Load() });
			expect(effects$.loadNotifications$).toBeObservable(
				hot('-a-|', {
					a: new LoadSuccess([], {} as any)
				})
			);
		});
	});
});
