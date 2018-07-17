import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';
import { DataPersistence } from '@nrwl/nx';
import { hot, cold, readAll } from '@nrwl/nx/testing';

import { ActivityLogActions } from './activity-log.actions';
import { ActivityLogEffects } from './activity-log.effects';
import { Load, LoadSuccess } from './activity-log.actions';

import { Observable } from 'rxjs';

describe('ActivityLogEffects', () => {
  let actions$: Observable<any>;
  let effects$: ActivityLogEffects;
  const logItem1 = {
    id: 1,
    type: '',
    message: '',
    source: '',
    occurence: new Date(),
    subject: '',
    action: {}
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      providers: [
        ActivityLogEffects,
        DataPersistence,
        provideMockActions(() => actions$),
        
      ]
    });

    effects$ = TestBed.get(ActivityLogEffects);
  });

  // todo: Renable this test and make it correct.
  // describe('someEffect', () => {
  //   it('should work', async () => {
  //     const action = new Load();
  //     const completion = new LoadSuccess([logItem1])

  //     actions$ = hot('-a-|', { a: action });
  //     // const response = cold('-a-b|', [ logItem1 ]);
  //     // const expected = cold('-----c', { c: completion });


  //     expect(await readAll(effects$.loadActivityLog$)).toEqual([completion]);
  //   });
  // });
});
