import { TestBed, inject } from '@angular/core/testing';

import { NotificationAPIService } from './notification-api.service';

describe('NotificationAPIService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NotificationAPIService]
    });
  });

  it('should be created', inject([NotificationAPIService], (service: NotificationAPIService) => {
    expect(service).toBeTruthy();
  }));
});
