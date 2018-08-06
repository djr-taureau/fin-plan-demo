import { async, TestBed } from '@angular/core/testing';
import { UiComponentsDataListModule } from './ui-components-data-list.module';

describe('UiComponentsDataListModule', () => {
	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				imports: [UiComponentsDataListModule]
			}).compileComponents();
		})
	);

	it('should create', () => {
		expect(UiComponentsDataListModule).toBeDefined();
	});
});
