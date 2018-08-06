import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComplianceComponent } from './dashboard-compliance.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

describe('DashboardComplianceComponent', () => {
	let component: DashboardComplianceComponent;
	let fixture: ComponentFixture<DashboardComplianceComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				imports: [StoreModule.forRoot({}), EffectsModule.forRoot([])],
				declarations: [DashboardComplianceComponent]
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
