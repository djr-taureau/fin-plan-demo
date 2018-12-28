// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { of } from 'rxjs';

// import { Notes } from '../../services';
// import { NoteImagePipe, NoteLinkPipe } from '../../pipes';
// import { NotesMock, MOCK_COMPLIANCE_NOTE } from '../../testing';

// import { NotesFormComponent } from './notes-form.component';
// import { NotesListComponent } from '../notes-list/Notes-list.component';

// describe('NotesWidgetComponent', () => {
// 	let component: NotesFormComponent;
// 	let fixture: ComponentFixture<NotesFormComponent>;
// 	const m_Notes = NotesMock;

// 	m_Notes.countOfUndismissed.and.returnValue(of(10));
// 	m_Notes.dismiss.and.returnValue(of(undefined));
// 	m_Notes.isDataLoaded.and.returnValue(of(true));
// 	m_Notes.getUndismissed.and.returnValue(
// 		of([MOCK_COMPLIANCE_NOTE])
// 	);

// 	beforeEach(
// 		async(() => {
// 			TestBed.configureTestingModule({
// 				declarations: [
// 					NotesFormComponent,
// 					NoteImagePipe,
// 					NoteLinkPipe,
// 					NotesListComponent
// 				],
// 				providers: [
// 					{
// 						provide: Notes,
// 						useValue: m_Notes
// 					}
// 				]
// 			}).compileComponents();
// 		})
// 	);

// 	beforeEach(() => {
// 		fixture = TestBed.createComponent(NotesFormComponent);
// 		component = fixture.componentInstance;
// 		fixture.detectChanges();
// 	});

// 	it('should create', () => {
// 		expect(component).toBeTruthy();
// 	});
// });
