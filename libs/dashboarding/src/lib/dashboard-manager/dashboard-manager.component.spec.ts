import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardManagerComponent } from './dashboard-manager.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';

describe('DashboardManagerComponent', () => {
	let component: DashboardManagerComponent;
	let fixture: ComponentFixture<DashboardManagerComponent>;

	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				imports: [StoreModule.forRoot({}), EffectsModule.forRoot([])],
				declarations: [DashboardManagerComponent],
				providers: [DataPersistence]
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
