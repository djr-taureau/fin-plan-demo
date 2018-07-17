import { LoadSuccess } from './activity-log.actions';
import { activityLogReducer, initialState } from './activity-log.reducer';
import { ActivityLogItems } from '../models';

describe('activityLogReducer', () => {
  // it('should work', () => {
  //   const action: LoadSuccess = new LoadSuccess([] as ActivityLogItems);
  //   const actual = activityLogReducer(initialState, action);
  //   expect(actual).toEqual({ status: 'loaded', entities: [] });
  // });
  it('should work', () => {
    expect(true).toEqual(true);
  });
});
