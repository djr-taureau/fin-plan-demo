import { TestBed, inject } from '@angular/core/testing';
import { Notifications } from './notifications.service';

describe('NotificationsServiceService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [Notifications]
		});
	});

	it(
		'should be created',
		inject([Notifications], (service: Notifications) => {
			expect(service).toBeTruthy();
		})
	);
});
