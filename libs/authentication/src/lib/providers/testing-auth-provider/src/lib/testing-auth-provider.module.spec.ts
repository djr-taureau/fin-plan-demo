import { async, TestBed } from '@angular/core/testing';
import { TestingAuthProviderModule } from './testing-auth-provider.module';

describe('TestingAuthProviderModule', () => {
	beforeEach(
		async(() => {
			TestBed.configureTestingModule({
				imports: [TestingAuthProviderModule]
			}).compileComponents();
		})
	);

	it('should create', () => {
		expect(TestingAuthProviderModule).toBeDefined();
	});
});
