import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComplianceComponent } from './dashboard-compliance.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';

describe('DashboardComplianceComponent', () => {
	let component: DashboardComplianceComponent;
	let fixture: ComponentFixture<DashboardComplianceComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				imports: [StoreModule.forRoot({}), EffectsModule.forRoot([])],
				declarations: [DashboardComplianceComponent],
				providers: [DataPersistence]
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
