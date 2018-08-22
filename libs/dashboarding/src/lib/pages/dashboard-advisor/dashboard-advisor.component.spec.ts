import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAdvisorComponent } from './dashboard-advisor.component';
import { DashboardHeaderComponent } from '../../components';

describe('DashboardAdvisorComponent', () => {
	let component: DashboardAdvisorComponent;
	let fixture: ComponentFixture<DashboardAdvisorComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [
					DashboardAdvisorComponent,
					DashboardHeaderComponent
				]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(DashboardAdvisorComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
