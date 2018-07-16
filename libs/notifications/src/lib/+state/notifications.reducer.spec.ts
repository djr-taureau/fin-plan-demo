import { NotificationsLoaded } from './notifications.actions';
import { notificationsReducer, initialState } from './notifications.reducer';

describe('notificationsReducer', () => {
  it('should work', () => {
    const action: NotificationsLoaded = new NotificationsLoaded({});
    const actual = notificationsReducer(initialState, action);
    expect(actual).toEqual({});
  });
});
