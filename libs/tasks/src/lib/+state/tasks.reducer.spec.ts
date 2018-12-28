import { Load } from './tasks.actions';
import { tasksReducer } from './tasks.reducer';
import { tasksInitialState } from './tasks.init';
import { LoadDataStatus } from '@lifeworks/common';

describe('tasksReducer', () => {
	describe('Load Action', () => {
		it('should set loading state to true', () => {
			const action: Load = new Load();
			const actual = tasksReducer(
				tasksInitialState,
				action
			);
			expect(actual.status).toEqual(LoadDataStatus.loading);
		});
	});
});
