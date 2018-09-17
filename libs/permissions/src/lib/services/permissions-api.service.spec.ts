import { TestBed, inject } from '@angular/core/testing';

import { PermissionsApi } from './permissions-api.service';

describe('PermissionsApi', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [PermissionsApi]
		});
	});

	it(
		'should be created',
		inject([PermissionsApi], (service: PermissionsApi) => {
			expect(service).toBeTruthy();
		})
	);
});
