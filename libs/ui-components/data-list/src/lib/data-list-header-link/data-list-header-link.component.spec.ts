import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataListHeaderLinkComponent } from './data-list-header-link.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('DataListHeaderLinkComponent', () => {
  let component: DataListHeaderLinkComponent;
  let fixture: ComponentFixture<DataListHeaderLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ DataListHeaderLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataListHeaderLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
