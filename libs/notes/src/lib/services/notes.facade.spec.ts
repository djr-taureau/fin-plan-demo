import { TestBed, inject } from '@angular/core/testing';
import { Notes } from './notes.facade';

describe('NotesFacadeFacade', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [Notes]
		});
	});

	it(
		'should be created',
		inject([Notes], (facade: Notes) => {
			expect(facade).toBeTruthy();
		})
	);
});
