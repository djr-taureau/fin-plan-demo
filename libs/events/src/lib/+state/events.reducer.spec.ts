import { Load } from './events.actions';
import { eventsReducer } from './events.reducer';
import { eventsInitialState } from './events.init';
import { LoadDataStatus } from '@lifeworks/common';

describe('eventssReducer', () => {
	describe('Load Action', () => {
		it('should set loading state to true', () => {
			const action: Load = new Load();
			const actual = eventsReducer(
				eventsInitialState,
				action
			);
			expect(actual.status).toEqual(LoadDataStatus.loading);
		});
	});
});
