import { EventLinkPipe } from './event-link.pipe';
import { MOCK_EVENT } from '../testing';

describe('EventLinkPipe', () => {
	it('should generate a relative url from the subject property', () => {
		const pipe = new EventLinkPipe();
		const result = pipe.transform(MOCK_EVENT);

		expect(result).toBe('/compliance/0187');
	});

	it('should handle bad inputs', () => {
		const pipe = new EventLinkPipe();
		const result = pipe.transform(null);

		expect(result).toBe('/');
	});
});
