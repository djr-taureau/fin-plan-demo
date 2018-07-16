import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';
import { DataPersistence } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';

import { NotificationsEffects } from './notifications.effects';
import {
  LoadNotifications,
  NotificationsLoaded
} from './notifications.actions';

import { Observable } from 'rxjs';

describe('NotificationsEffects', () => {
  let actions$: Observable<any>;
  let effects$: NotificationsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      providers: [
        NotificationsEffects,
        DataPersistence,
        provideMockActions(() => actions$)
      ]
    });

    effects$ = TestBed.get(NotificationsEffects);
  });

  describe('someEffect', () => {
    it('should work', () => {
      actions$ = hot('-a-|', { a: new LoadNotifications({}) });
      expect(effects$.loadNotifications$).toBeObservable(
        hot('-a-|', { a: new NotificationsLoaded({}) })
      );
    });
  });
});
