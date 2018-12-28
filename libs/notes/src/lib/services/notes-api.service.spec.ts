import { TestBed, inject } from '@angular/core/testing';

import { NotesApi } from './notes-api.service';

describe('NotesApi', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [NotesApi]
		});
	});

	it(
		'should be created',
		inject([NotesApi], (service: NotesApi) => {
			expect(service).toBeTruthy();
		})
	);
});
