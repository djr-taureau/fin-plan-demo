import { NotificationImagePipe } from './notification-image.pipe';
import { MOCK_COMPLIANCE_NOTIFICATION } from '../testing';

describe('NotificationImagePipe', () => {
	it('create an instance', () => {
		const pipe = new NotificationImagePipe();
		expect(pipe).toBeTruthy();
	});

	it('should generate an icon type based upon the notification', () => {
		const pipe = new NotificationImagePipe();
		const result = pipe.transform(MOCK_COMPLIANCE_NOTIFICATION);
		expect(result).toBe('check');
	});

	it('should handle invalid objects', () => {
		const pipe = new NotificationImagePipe();
		const result = pipe.transform(null);
		expect(result).toBe('');
	});
});
