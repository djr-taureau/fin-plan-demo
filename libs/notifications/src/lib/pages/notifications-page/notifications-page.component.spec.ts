import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { NotificationsPageComponent } from './notifications-page.component';
import { NotificationsWidgetComponent } from '../../components/notifications-widget/notifications-widget.component';
import { NotificationImagePipe } from '../../pipes/notification-image.pipe';
import { NotificationLinkPipe } from '../../pipes/notification-link.pipe';

describe('NotificationsPageComponent', () => {
	let component: NotificationsPageComponent;
	let fixture: ComponentFixture<NotificationsPageComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				imports: [StoreModule.forRoot({}), EffectsModule.forRoot([])],
				declarations: [
					NotificationsPageComponent,
					NotificationsWidgetComponent,
					NotificationImagePipe,
					NotificationLinkPipe
				]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(NotificationsPageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
