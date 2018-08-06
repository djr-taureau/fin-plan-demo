import { Load } from './notifications.actions';
import { notificationsReducer, initialState } from './notifications.reducer';
import { LoadDataStatus } from '@lifeworks/core';

describe('notificationsReducer', () => {
	it('should work', () => {
		const action: Load = new Load();
		const actual = notificationsReducer(initialState, action);
		expect(actual.status).toEqual(LoadDataStatus.loading);
	});
});
