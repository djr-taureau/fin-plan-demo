import { TestBed, inject } from '@angular/core/testing';

import { DashboardServiceService } from './dashboard-service.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';

describe('DashboardServiceService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [StoreModule.forRoot({}), EffectsModule.forRoot([])],
			providers: [DashboardServiceService, DataPersistence]
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
