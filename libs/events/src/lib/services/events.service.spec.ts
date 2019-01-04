import { TestBed, inject } from '@angular/core/testing';
import { Events } from './events.service';

describe('EventsServiceService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [Events]
		});
	});

	it(
		'should be created',
		inject([Events], (service: Events) => {
			expect(service).toBeTruthy();
		})
	);
});
