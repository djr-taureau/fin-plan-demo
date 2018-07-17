import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ActivityLogComponent } from './activity-log/activity-log.component';
import { ActivityLogItemComponent } from './activity-log-item/activity-log-item.component';
import { ActivityPageComponent } from './activity-page/activity-page.component';
import { ActivityLogAPIService } from './activity-log-api.service';
import { ActivityLogService } from './activity-log.service';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  activityLogReducer,
  initialState as activityLogInitialState
} from './+state/activity-log.reducer';
import { ActivityLogEffects } from './+state/activity-log.effects';
import { CoreModule } from '@lifeworks/core';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: ActivityPageComponent }
    ]),
    StoreModule.forFeature('activityLog', activityLogReducer, {
      initialState: activityLogInitialState
    }),
    EffectsModule.forFeature([ActivityLogEffects]),
    CoreModule
  ],
  declarations: [
    ActivityLogComponent,
    ActivityLogItemComponent,
    ActivityPageComponent
  ],
  providers: [ActivityLogAPIService, ActivityLogService, ActivityLogEffects]
})
export class ActivityLogModule {}
