import { TestBed, inject } from '@angular/core/testing';

import { NotificationsApi } from './notifications-api.service';

describe('NotificationsApi', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [NotificationsApi]
		});
	});

	it(
		'should be created',
		inject([NotificationsApi], (service: NotificationsApi) => {
			expect(service).toBeTruthy();
		})
	);
});
