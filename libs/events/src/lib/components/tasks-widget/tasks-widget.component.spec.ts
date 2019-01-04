import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { Events } from '../../services';
import { EventImagePipe, EventLinkPipe } from '../../pipes';
import { EventsMock, MOCK_EVENT } from '../../testing';

import { TasksWidgetComponent } from './tasks-widget.component';
import { TasksListComponent } from '../tasks-list/tasks-list.component';

describe('TasksWidgetComponent', () => {
	let component: TasksWidgetComponent;
	let fixture: ComponentFixture<TasksWidgetComponent>;
	const m_Events = EventsMock;

	m_Events.countOfUndismissed.and.returnValue(of(10));
	m_Events.dismiss.and.returnValue(of(undefined));
	m_Events.isDataLoaded.and.returnValue(of(true));
	m_Events.getUndismissed.and.returnValue(
		of([MOCK_EVENT])
	);

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [
					TasksWidgetComponent,
					EventImagePipe,
					EventLinkPipe,
					TasksListComponent
				],
				providers: [
					{
						provide: Events,
						useValue: m_Events
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
