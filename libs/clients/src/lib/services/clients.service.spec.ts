import { TestBed, inject } from '@angular/core/testing';
import { Clients } from './clients.service';

describe('ClientsServiceService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [Clients]
		});
	});

	it(
		'should be created',
		inject([Clients], (service: Clients) => {
			expect(service).toBeTruthy();
		})
	);
});
