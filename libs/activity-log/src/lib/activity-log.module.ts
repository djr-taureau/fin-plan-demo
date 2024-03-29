import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ActivityLogComponent } from './activity-log/activity-log.component';
import { ActivityLogItemComponent } from './activity-log-item/activity-log-item.component';
import { ActivityPageComponent } from './activity-page/activity-page.component';
import { ActivityLogAPIService, ActivityLogService } from './services';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
	activityLogReducer,
	initialState as activityLogInitialState
} from './+state/activity-log.reducer';
import { ActivityLogEffects } from './+state/activity-log.effects';
import { CoreModule } from '@lifeworks/core';
import { CommonModule } from '@lifeworks/common';
import {
	AuthenticatedGuard,
	HttpAuthTokenInterceptor
} from '@lifeworks/authentication';

@NgModule({
	imports: [
		NgCommonModule,
		HttpClientModule,
		CoreModule,
		CommonModule,
		RouterModule.forChild([
			{
				path: 'activity-log',
				component: ActivityPageComponent,
				canActivate: [AuthenticatedGuard]
			}
		]),
		StoreModule.forFeature('activityLog', activityLogReducer, {
			initialState: activityLogInitialState
		}),
		EffectsModule.forFeature([ActivityLogEffects])
	],
	declarations: [
		ActivityLogComponent,
		ActivityLogItemComponent,
		ActivityPageComponent
	],
	providers: [
		ActivityLogAPIService,
		ActivityLogService,
		ActivityLogEffects,
		{
			provide: HTTP_INTERCEPTORS,
			useClass: HttpAuthTokenInterceptor,
			multi: true
		}
	]
})
export class ActivityLogModule {}
