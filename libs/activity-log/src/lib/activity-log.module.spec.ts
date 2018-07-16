import { async, TestBed } from '@angular/core/testing';
import { ActivityLogModule } from './activity-log.module';

describe('ActivityLogModule', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [ActivityLogModule]
      }).compileComponents();
    })
  );

  it('should create', () => {
    expect(ActivityLogModule).toBeDefined();
  });
});
