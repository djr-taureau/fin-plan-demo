import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComplianceComponent } from './dashboard-compliance.component';
import { DashboardHeaderComponent } from '../../components';

describe('DashboardComplianceComponent', () => {
	let component: DashboardComplianceComponent;
	let fixture: ComponentFixture<DashboardComplianceComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [
					DashboardComplianceComponent,
					DashboardHeaderComponent
				]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(DashboardComplianceComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
