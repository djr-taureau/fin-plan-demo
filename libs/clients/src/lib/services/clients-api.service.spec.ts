import { TestBed, inject } from '@angular/core/testing';

import { ClientsApi } from './clients-api.service';

describe('ClientsApi', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [ClientsApi]
		});
	});

	it(
		'should be created',
		inject([ClientsApi], (service: ClientsApi) => {
			expect(service).toBeTruthy();
		})
	);
});
