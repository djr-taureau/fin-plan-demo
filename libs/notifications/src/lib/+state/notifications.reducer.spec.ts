import { Load } from './notifications.actions';
import { notificationsReducer } from './notifications.reducer';
import { notificationsInitialState } from './notifications.init';
import { LoadDataStatus } from '@lifeworks/common';

describe('notificationsReducer', () => {
	describe('Load Action', () => {
		it('should set loading state to true', () => {
			const action: Load = new Load();
			const actual = notificationsReducer(
				notificationsInitialState,
				action
			);
			expect(actual.status).toEqual(LoadDataStatus.loading);
		});
	});
});
