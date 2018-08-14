import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardOverviewItemComponent } from './dashboard-overview-item.component';

describe('DashboardOverviewItemComponent', () => {
  let component: DashboardOverviewItemComponent;
  let fixture: ComponentFixture<DashboardOverviewItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardOverviewItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardOverviewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
