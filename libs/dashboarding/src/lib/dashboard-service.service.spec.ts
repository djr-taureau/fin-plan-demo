import { TestBed, inject } from '@angular/core/testing';

import { DashboardServiceService } from './dashboard-service.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

describe('DashboardServiceService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [StoreModule.forRoot({}), EffectsModule.forRoot([])],
			providers: [DashboardServiceService]
		});
	});

	it(
		'should be created',
		inject(
			[DashboardServiceService],
			(service: DashboardServiceService) => {
				expect(service).toBeTruthy();
			}
		)
	);
});
