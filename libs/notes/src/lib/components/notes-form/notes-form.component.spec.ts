import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Notes } from '../../services';
import { NotesMock, MOCK_NOTE } from '../../testing';
import { NotesFormComponent } from './notes-form.component';

describe('NotesFormComponent', () => {
	let component: NotesFormComponent;
	let fixture: ComponentFixture<NotesFormComponent>;
	const m_Notes = NotesMock;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [
					NotesFormComponent,
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
