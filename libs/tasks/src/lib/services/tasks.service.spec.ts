import { TestBed, inject } from '@angular/core/testing';
import { Tasks } from './tasks.service';

describe('TasksServiceService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [Tasks]
		});
	});

	it(
		'should be created',
		inject([Tasks], (service: Tasks) => {
			expect(service).toBeTruthy();
		})
	);
});
