import { TaskLinkPipe } from './task-link.pipe';
import { MOCK_TASK } from '../testing';

describe('TaskLinkPipe', () => {
	it('should generate a relative url from the subject property', () => {
		const pipe = new TaskLinkPipe();
		const result = pipe.transform(MOCK_TASK);

		expect(result).toBe('/compliance/0187');
	});

	it('should handle bad inputs', () => {
		const pipe = new TaskLinkPipe();
		const result = pipe.transform(null);

		expect(result).toBe('/');
	});
});
