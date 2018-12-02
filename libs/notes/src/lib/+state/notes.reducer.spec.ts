import { Load } from './notes.actions';
import { notesReducer } from './notes.reducer';
import { notesInitialState } from './notes.init';
import { LoadDataStatus } from '@lifeworks/common';

describe('notesReducer', () => {
	describe('Load Action', () => {
		it('should set loading state to true', () => {
			const action: Load = new Load();
			const actual = notesReducer(
				notesInitialState,
				action
			);
			expect(actual.status).toEqual(LoadDataStatus.loading);
		});
	});
});
