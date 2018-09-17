import { async, TestBed } from '@angular/core/testing';
import { AdminFeaturesDashboardModule } from './admin-features-dashboard.module';

describe('AdminFeaturesDashboardModule', () => {
	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				imports: [AdminFeaturesDashboardModule]
			}).compileComponents();
		})
	);

	it('should create', () => {
		expect(AdminFeaturesDashboardModule).toBeDefined();
	});
});
