import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryListItemComponent } from './summary-list-item.component';

describe('SummaryListItemComponent', () => {
  let component: SummaryListItemComponent;
  let fixture: ComponentFixture<SummaryListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
