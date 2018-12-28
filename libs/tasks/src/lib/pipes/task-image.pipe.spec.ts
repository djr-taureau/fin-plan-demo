import { TaskImagePipe } from './task-image.pipe';
import { MOCK_TASK } from '../testing';

describe('TaskImagePipe', () => {
	it('should generate an icon type based upon the task', () => {
		const pipe = new TaskImagePipe();
		const result = pipe.transform(MOCK_TASK);
		expect(result).toBe('task completed');
	});

	it('should handle invalid objects', () => {
		const pipe = new TaskImagePipe();
		const result = pipe.transform(null);
		expect(result).toBe('');
	});
});
