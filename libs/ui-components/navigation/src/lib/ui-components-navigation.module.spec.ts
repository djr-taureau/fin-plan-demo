import { async, TestBed } from '@angular/core/testing';
import { UiComponentsNavigationModule } from './ui-components-navigation.module';

describe('UiComponentsNavigationModule', () => {
	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				imports: [UiComponentsNavigationModule]
			}).compileComponents();
		})
	);

	it('should create', () => {
		expect(UiComponentsNavigationModule).toBeDefined();
	});
});
