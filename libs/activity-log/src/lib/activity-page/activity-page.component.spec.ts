import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { ActivityPageComponent } from './activity-page.component';
import { ActivityLogComponent } from '../activity-log/activity-log.component';
import { ActivityLogItemComponent } from '../activity-log-item/activity-log-item.component';

describe('ActivityPageComponent', () => {
  let component: ActivityPageComponent;
  let fixture: ComponentFixture<ActivityPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      declarations: [
        ActivityPageComponent,
        ActivityLogComponent,
        ActivityLogItemComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
