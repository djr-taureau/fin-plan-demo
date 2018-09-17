import { NgModule } from '@angular/core';

import {
	AdminDashboardCoreModule,
	AdminDashboardRoutingModule,
	AdminDashboardUIModule
} from './+modules';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';

@NgModule({
	imports: [AdminDashboardCoreModule, AdminDashboardRoutingModule, AdminDashboardUIModule],
	declarations: [DashboardPageComponent]
})
export class AdminFeaturesDashboardModule {}
