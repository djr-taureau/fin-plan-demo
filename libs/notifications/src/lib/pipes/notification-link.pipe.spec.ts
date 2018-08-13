import { NotificationLinkPipe } from './notification-link.pipe';
import { MOCK_COMPLIANCE_NOTIFICATION } from '../testing';

describe('NotificationLinkPipe', () => {
	it('create an instance', () => {
		const pipe = new NotificationLinkPipe();
		expect(pipe).toBeTruthy();
	});

	it('should generate a relative url from the subject property', () => {
		const pipe = new NotificationLinkPipe();
		const result = pipe.transform(MOCK_COMPLIANCE_NOTIFICATION);

		expect(result).toBe('/compliance/0187');
	});

	it('should handle bad inputs', () => {
		const pipe = new NotificationLinkPipe();
		const result = pipe.transform(null);

		expect(result).toBe('/');
	});
});
