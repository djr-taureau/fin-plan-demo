import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

// import { NotesService } from '../../services';
import { NoteImagePipe, NoteLinkPipe } from '../../pipes';
import { NotesMock } from '../../testing';
import { NotesWidgetComponent } from '../notes-widget/notes-widget.component';
import { NotesListComponent } from './notes-list.component';

describe('NotesListComponent', () => {
	let component: NotesListComponent;
	let fixture: ComponentFixture<NotesListComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [
					NotesListComponent,
					NotesWidgetComponent,
					NoteImagePipe,
					NoteLinkPipe
				]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(NotesListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
