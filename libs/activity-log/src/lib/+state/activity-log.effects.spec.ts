import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';
import { DataPersistence } from '@nrwl/nx';
import { hot, cold, readAll } from '@nrwl/nx/testing';

import { ActivityLogActions } from './activity-log.actions';
import { ActivityLogEffects } from './activity-log.effects';
import { Load, LoadSuccess, LoadFail } from './activity-log.actions';

import { Observable, of } from 'rxjs';
import { ActivityLogService } from '../activity-log.service';

describe('ActivityLogEffects', () => {
	let actions$: Observable<any>;
	let effects$: ActivityLogEffects;
	const spyFn = jasmine.createSpy('get');

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [StoreModule.forRoot({})],
			providers: [
				ActivityLogEffects,
				DataPersistence,
				provideMockActions(() => actions$),
				{
					provide: ActivityLogService,
					useValue: { get: spyFn }
				}
			]
		});

		effects$ = TestBed.get(ActivityLogEffects);
	});

	describe('loadActivityLog Effect', () => {
		it('call LoadSuccess on Successful API call', () => {
			spyFn.and.returnValue(of({ results: [] }));
			actions$ = hot('-a-|', { a: new Load() });
			expect(effects$.loadActivityLog$).toBeObservable(
				hot('-a-|', { a: new LoadSuccess([], {} as any) })
			);
		});

		it('call LoadFail on failed API call', () => {
			spyFn.and.throwError('error');
			actions$ = hot('-a-|', { a: new Load() });
			expect(effects$.loadActivityLog$).toBeObservable(
				hot('-a-|', { a: new LoadFail(new Error('error')) })
			);
		});
	});
});
