import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { Tasks } from '../../services';
import { TaskImagePipe, TaskLinkPipe } from '../../pipes';
import { TasksMock, MOCK_TASK } from '../../testing';

import { TasksWidgetComponent } from './tasks-widget.component';
import { TasksListComponent } from '../tasks-list/tasks-list.component';

describe('TasksWidgetComponent', () => {
	let component: TasksWidgetComponent;
	let fixture: ComponentFixture<TasksWidgetComponent>;
	const m_Tasks = TasksMock;

	m_Tasks.countOfUndismissed.and.returnValue(of(10));
	m_Tasks.dismiss.and.returnValue(of(undefined));
	m_Tasks.isDataLoaded.and.returnValue(of(true));
	m_Tasks.getUndismissed.and.returnValue(
		of([MOCK_TASK])
	);

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [
					TasksWidgetComponent,
					TaskImagePipe,
					TaskLinkPipe,
					TasksListComponent
				],
				providers: [
					{
						provide: Tasks,
						useValue: m_Tasks
					}
				]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(TasksWidgetComponent);
		fixture.componentInstance.filter = 'undismissed';
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
