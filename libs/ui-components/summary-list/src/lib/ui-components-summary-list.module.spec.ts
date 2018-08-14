import { async, TestBed } from '@angular/core/testing';
import { UiComponentsSummaryListModule } from './ui-components-summary-list.module';

describe('UiComponentsSummaryListModule', () => {
	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				imports: [UiComponentsSummaryListModule]
			}).compileComponents();
		})
	);

	it('should create', () => {
		expect(UiComponentsSummaryListModule).toBeDefined();
	});
});
