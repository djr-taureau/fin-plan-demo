import { TestBed, inject } from '@angular/core/testing';
import { Notes } from './notes.service';

describe('NotesServiceService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [Notes]
		});
	});

	it(
		'should be created',
		inject([Notes], (service: Notes) => {
			expect(service).toBeTruthy();
		})
	);
});
