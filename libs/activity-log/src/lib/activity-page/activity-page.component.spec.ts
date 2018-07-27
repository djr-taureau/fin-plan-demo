import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivityPageComponent } from './activity-page.component';
import { ActivityLogItemComponent } from '../activity-log-item/activity-log-item.component';
import { ActivityLogComponent } from '../activity-log/activity-log.component';
import { ActivityLogData, activityLogReducer } from '../+state/activity-log.reducer';
import { StoreModule, Store, combineReducers } from '@ngrx/store';
import * as ActivityLogActions from '../+state/activity-log.actions';


describe('ActivityPageComponent', () => {
  let component: ActivityPageComponent;
  let fixture: ComponentFixture<ActivityPageComponent>;
  let store: Store<ActivityLogData>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          books: combineReducers(activityLogReducer),
        })],
      declarations: [ActivityPageComponent, ActivityLogItemComponent, ActivityLogComponent]
    }).compileComponents();

    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch a ActivityLogActions.Load on init', () => {
    const action = new ActivityLogActions.Load();

    fixture.detectChanges();

    expect(store.dispatch).toHaveBeenCalledWith(action);
  });
});
