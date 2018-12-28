import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { Notes } from '../../services';
import { NoteImagePipe, NoteLinkPipe } from '../../pipes';
import { NotesMock, MOCK_NOTE } from '../../testing';

import { NotesFormDialogComponent } from './notes-form-dialog.component';
import { NotesListComponent } from '../notes-list/Notes-list.component';

describe('NotesWidgetComponent', () => {
	let component: NotesFormDialogComponent;
	let fixture: ComponentFixture<NotesFormDialogComponent>;
	const m_Notes = NotesMock;



	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [
					NotesFormDialogComponent,
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
		fixture = TestBed.createComponent(NotesFormDialogComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
