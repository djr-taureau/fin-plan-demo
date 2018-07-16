import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';
import { DataPersistence } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';

import { ActivityLogEffects } from './activity-log.effects';
import { Load, LoadSuccess } from './activity-log.actions';

import { Observable } from 'rxjs';

describe('ActivityLogEffects', () => {
  let actions$: Observable<any>;
  let effects$: ActivityLogEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      providers: [
        ActivityLogEffects,
        DataPersistence,
        provideMockActions(() => actions$)
      ]
    });

    effects$ = TestBed.get(ActivityLogEffects);
  });

  describe('someEffect', () => {
    it('should work', () => {
      actions$ = hot('-a-|', { a: new Load() });
      expect(effects$.loadActivityLog$).toBeObservable(
        hot('-a-|', { a: new LoadSuccess([]) })
      );
    });
  });
});
