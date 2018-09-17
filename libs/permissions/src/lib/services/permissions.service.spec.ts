import { TestBed, inject } from '@angular/core/testing';
import { Permissions } from './permissions.service';

describe('PermissionsServiceService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [Permissions]
		});
	});

	it(
		'should be created',
		inject([Permissions], (service: Permissions) => {
			expect(service).toBeTruthy();
		})
	);
});
