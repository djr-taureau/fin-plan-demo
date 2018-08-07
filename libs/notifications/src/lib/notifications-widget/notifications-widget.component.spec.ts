import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NotificationsWidgetComponent } from './notifications-widget.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

describe('NotificationsWidgetComponent', () => {
	let component: NotificationsWidgetComponent;
	let fixture: ComponentFixture<NotificationsWidgetComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				imports: [StoreModule.forRoot({}), EffectsModule.forRoot([])],
				declarations: [NotificationsWidgetComponent]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(NotificationsWidgetComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
