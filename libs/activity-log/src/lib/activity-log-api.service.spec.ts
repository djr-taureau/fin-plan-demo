import { TestBed, inject } from '@angular/core/testing';

import { ActivityLogAPIService } from './activity-log-api.service';

describe('ActivityLogAPIService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActivityLogAPIService]
    });
  });

  it('should be created', inject([ActivityLogAPIService], (service: ActivityLogAPIService) => {
    expect(service).toBeTruthy();
  }));
});
