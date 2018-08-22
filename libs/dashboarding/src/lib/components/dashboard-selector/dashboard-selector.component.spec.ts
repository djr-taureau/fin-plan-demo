import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSelectorComponent } from './dashboard-selector.component';
import { DashboardRolePipe } from '../../dashboard-role.pipe';

describe('DashboardSelectorComponent', () => {
	let component: DashboardSelectorComponent;
	let fixture: ComponentFixture<DashboardSelectorComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				declarations: [DashboardSelectorComponent, DashboardRolePipe]
			}).compileComponents();
		})
	);

	beforeEach(() => {
		fixture = TestBed.createComponent(DashboardSelectorComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
