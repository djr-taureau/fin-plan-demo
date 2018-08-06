import { TestBed, inject } from '@angular/core/testing';

import { LocationRouterService } from './location-router.service';

describe('LocationRouterService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [LocationRouterService]
		});
	});

	it(
		'should be created',
		inject([LocationRouterService], (service: LocationRouterService) => {
			expect(service).toBeTruthy();
		})
	);
});
