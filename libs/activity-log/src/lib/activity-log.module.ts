import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ActivityLogComponent } from './activity-log/activity-log.component';
import { ActivityLogItemComponent } from './activity-log-item/activity-log-item.component';
import { ActivityPageComponent } from './activity-page/activity-page.component';
import { ActivityLogAPIService } from './activity-log-api.service';
import { ActivityLogService } from './activity-log.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
	activityLogReducer,
	initialState as activityLogInitialState
} from './+state/activity-log.reducer';
import { ActivityLogEffects } from './+state/activity-log.effects';
import { CoreModule } from '@lifeworks/core';
import {
	AuthenticatedGuard,
	HttpAuthTokenInterceptor
} from '@lifeworks/authentication';

@NgModule({
	imports: [
		CommonModule,
		HttpClientModule,
		CoreModule,
		RouterModule.forChild([
			{
				path: '',
				pathMatch: 'full',
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
