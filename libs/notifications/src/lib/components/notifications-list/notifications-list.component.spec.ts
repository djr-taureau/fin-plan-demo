import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { Notifications } from '../../services';
import { NotificationImagePipe, NotificationLinkPipe } from '../../pipes';
import { NotificationsMock, MOCK_COMPLIANCE_NOTIFICATION } from '../../testing';
import { NotificationsWidgetComponent } from '../notifications-widget/notifications-widget.component';
import { NotificationsListComponent } from './notifications-list.component';

describe('NotificationsListComponent', () => {
	let component: NotificationsListComponent;
	let fixture: ComponentFixture<NotificationsListComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [
					NotificationsListComponent,
					NotificationsWidgetComponent,
					NotificationImagePipe,
					NotificationLinkPipe
				]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(NotificationsListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
