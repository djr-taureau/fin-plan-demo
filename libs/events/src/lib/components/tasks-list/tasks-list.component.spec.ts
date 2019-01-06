import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { Events } from '../../services';
import { EventImagePipe, EventLinkPipe } from '../../pipes';
import { EventsMock, MOCK_EVENT} from '../../testing';
import { TasksWidgetComponent } from '../tasks-widget/tasks-widget.component';
import { TasksListComponent } from './tasks-list.component';

describe('NotesListComponent', () => {
	let component: TasksListComponent;
	let fixture: ComponentFixture<TasksListComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [
					TasksListComponent,
					TasksWidgetComponent,
					EventImagePipe,
					EventLinkPipe
				]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(TasksListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
