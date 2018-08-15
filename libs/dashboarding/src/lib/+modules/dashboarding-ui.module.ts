import { NgModule } from '@angular/core';
import { UiComponentsDashboardOverviewModule } from '@lifeworks/ui-components/dashboard-overview';
import { UiComponentsSummaryListModule } from '@lifeworks/ui-components/summary-list';
import { NotificationsModule } from '@lifeworks/notifications';
import { CommonModule } from '@lifeworks/common';
import { AuthenticationModule } from '@lifeworks/authentication';

const MODULES = [
	CommonModule,
	AuthenticationModule,
	UiComponentsDashboardOverviewModule,
	UiComponentsSummaryListModule,
	NotificationsModule
];

@NgModule({
	imports: MODULES,
	exports: MODULES
})
export class DashboardingUIModule {}
