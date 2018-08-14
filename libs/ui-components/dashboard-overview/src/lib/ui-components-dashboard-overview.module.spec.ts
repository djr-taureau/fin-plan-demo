import { async, TestBed } from '@angular/core/testing';
import { UiComponentsDashboardOverviewModule } from './ui-components-dashboard-overview.module';

describe('UiComponentsDashboardOverviewModule', () => {
	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				imports: [UiComponentsDashboardOverviewModule]
			}).compileComponents();
		})
	);

	it('should create', () => {
		expect(UiComponentsDashboardOverviewModule).toBeDefined();
	});
});
