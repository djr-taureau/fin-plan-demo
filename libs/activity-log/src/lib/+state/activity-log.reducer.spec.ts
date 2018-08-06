import { LoadFail, LoadSuccess, Load } from './activity-log.actions';
import { activityLogReducer, initialState } from './activity-log.reducer';
import { LoadDataStatus } from '@lifeworks/core';

describe('activityLogReducer', () => {
	it('update status and entities for a LoadSuccess Action', () => {
		const action: LoadSuccess = new LoadSuccess([], {} as any);
		const actual = activityLogReducer(initialState, action);
		expect(actual.entities).toEqual([]);
		expect(actual.status).toEqual(LoadDataStatus.loaded);
	});

	it('update status to Loading on LoadFail Action', () => {
		const action: Load = new Load();
		const actual = activityLogReducer(initialState, action);
		expect(actual.status).toEqual(LoadDataStatus.loading);
	});

	it('update status to Error and clear entities on LoadFail Action', () => {
		const action: LoadFail = new LoadFail(new Error('error'));
		const actual = activityLogReducer(initialState, action);
		expect(actual.status).toEqual(LoadDataStatus.error);
		expect(actual.entities).toEqual([]);
	});
});
