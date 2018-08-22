import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardManagerComponent } from './dashboard-manager.component';
import { DashboardHeaderComponent } from '../../components';

describe('DashboardManagerComponent', () => {
	let component: DashboardManagerComponent;
	let fixture: ComponentFixture<DashboardManagerComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [
					DashboardManagerComponent,
					DashboardHeaderComponent
				]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(DashboardManagerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
