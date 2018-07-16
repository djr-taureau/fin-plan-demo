import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityLogItemComponent } from './activity-log-item.component';

describe('ActivityLogItemComponent', () => {
  let component: ActivityLogItemComponent;
  let fixture: ComponentFixture<ActivityLogItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityLogItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityLogItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
