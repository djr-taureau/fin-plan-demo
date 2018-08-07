import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAdvisorComponent } from './dashboard-advisor.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';

describe('DashboardAdvisorComponent', () => {
	let component: DashboardAdvisorComponent;
	let fixture: ComponentFixture<DashboardAdvisorComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				imports: [StoreModule.forRoot({}), EffectsModule.forRoot([])],
				declarations: [DashboardAdvisorComponent],
				providers: [DataPersistence]
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
