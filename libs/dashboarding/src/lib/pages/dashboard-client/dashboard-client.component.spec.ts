import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardClientComponent } from './dashboard-client.component';
import { DashboardHeaderComponent } from '../../components';

describe('DashboardClientComponent', () => {
	let component: DashboardClientComponent;
	let fixture: ComponentFixture<DashboardClientComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [
					DashboardClientComponent,
					DashboardHeaderComponent
				]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(DashboardClientComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
