import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { Notifications } from '../../services';
import { NotificationImagePipe, NotificationLinkPipe } from '../../pipes';
import { NotificationsMock, MOCK_COMPLIANCE_NOTIFICATION } from '../../testing';
import { NotificationsWidgetComponent } from './notifications-widget.component';

describe('NotificationsWidgetComponent', () => {
	let component: NotificationsWidgetComponent;
	let fixture: ComponentFixture<NotificationsWidgetComponent>;
	const m_Notifications = NotificationsMock;

	m_Notifications.countOfUndismissed.and.returnValue(of(10));
	m_Notifications.dismiss.and.returnValue(of(undefined));
	m_Notifications.isDataLoaded.and.returnValue(of(true));
	m_Notifications.getUndismissed.and.returnValue(
		of([MOCK_COMPLIANCE_NOTIFICATION])
	);

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [
					NotificationsWidgetComponent,
					NotificationImagePipe,
					NotificationLinkPipe
				],
				providers: [
					{
						provide: Notifications,
						useValue: m_Notifications
					}
				]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(NotificationsWidgetComponent);
		fixture.componentInstance.filter = 'undismissed';
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
