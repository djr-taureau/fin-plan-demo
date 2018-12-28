import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { Notes } from '../../services';
import { NoteImagePipe, NoteLinkPipe } from '../../pipes';
import { NotesMock, MOCK_NOTE } from '../../testing';

import { NotesFormComponent } from './notes-form.component';
import { NotesListComponent } from '../notes-list/Notes-list.component';

describe('NotesWidgetComponent', () => {
	let component: NotesFormComponent;
	let fixture: ComponentFixture<NotesFormComponent>;
	const m_Notes = NotesMock;


	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [
					NotesFormComponent,
					NoteImagePipe,
					NoteLinkPipe,
					NotesListComponent
				],
				providers: [
					{
						provide: Notes,
						useValue: m_Notes
					}
				]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(NotesFormComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
