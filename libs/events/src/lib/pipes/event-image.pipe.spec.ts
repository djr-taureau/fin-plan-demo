import { EventImagePipe } from './event-image.pipe';
import { MOCK_EVENT } from '../testing';

describe('EventImagePipe', () => {
	it('should generate an icon type based upon the Event', () => {
		const pipe = new EventImagePipe();
		const result = pipe.transform(MOCK_EVENT);
		expect(result).toBe('Event completed');
	});

	it('should handle invalid objects', () => {
		const pipe = new EventImagePipe();
		const result = pipe.transform(null);
		expect(result).toBe('');
	});
});
