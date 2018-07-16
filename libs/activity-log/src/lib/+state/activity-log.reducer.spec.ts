import { LoadSuccess } from './activity-log.actions';
import { activityLogReducer, initialState } from './activity-log.reducer';

describe('activityLogReducer', () => {
  it('should work', () => {
    const action: LoadSuccess = new LoadSuccess([]);
    const actual = activityLogReducer(initialState, action);
    expect(actual).toEqual({});
  });
});
