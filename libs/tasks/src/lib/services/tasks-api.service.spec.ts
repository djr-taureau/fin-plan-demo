import { TestBed, inject } from '@angular/core/testing';

import { TasksApi } from './tasks-api.service';

describe('TasksApi', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [TasksApi]
		});
	});

	it(
		'should be created',
		inject([TasksApi], (service: TasksApi) => {
			expect(service).toBeTruthy();
		})
	);
});
