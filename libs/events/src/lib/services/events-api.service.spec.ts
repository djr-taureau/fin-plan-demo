import { TestBed, inject } from '@angular/core/testing';

import { EventsApi } from './events-api.service';

describe('EventsApi', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [EventsApi]
		});
	});

	it(
		'should be created',
		inject([EventsApi], (service: EventsApi) => {
			expect(service).toBeTruthy();
		})
	);
});
