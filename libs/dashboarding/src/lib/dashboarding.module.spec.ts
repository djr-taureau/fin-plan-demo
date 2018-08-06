import { async, TestBed } from '@angular/core/testing';
import { DashboardingModule } from './dashboarding.module';

describe('DashboardingModule', () => {
	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				imports: [DashboardingModule]
			}).compileComponents();
		})
	);

	it('should create', () => {
		expect(DashboardingModule).toBeDefined();
	});
});
