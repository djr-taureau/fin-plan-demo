import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NotificationsPageComponent } from './notifications-page.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NotificationsWidgetComponent } from '../notifications-widget/notifications-widget.component';

describe('NotificationsPageComponent', () => {
	let component: NotificationsPageComponent;
	let fixture: ComponentFixture<NotificationsPageComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				imports: [StoreModule.forRoot({}), EffectsModule.forRoot([])],
				declarations: [NotificationsPageComponent, NotificationsWidgetComponent]
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
