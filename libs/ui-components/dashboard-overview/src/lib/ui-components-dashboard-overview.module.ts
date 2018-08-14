import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
	DashboardOverviewComponent,
	DashboardOverviewDescriptionDirective
} from './dashboard-overview/dashboard-overview.component';
import { DashboardOverviewEmphasisComponent } from './dashboard-overview-emphasis/dashboard-overview-emphasis.component';
import { DashboardOverviewFooterComponent } from './dashboard-overview-footer/dashboard-overview-footer.component';
import { DashboardOverviewItemComponent } from './dashboard-overview-item/dashboard-overview-item.component';
@NgModule({
	imports: [CommonModule],
	declarations: [
		DashboardOverviewComponent,
		DashboardOverviewEmphasisComponent,
		DashboardOverviewFooterComponent,
		DashboardOverviewDescriptionDirective,
		DashboardOverviewItemComponent
	],
	exports: [
		DashboardOverviewComponent,
		DashboardOverviewEmphasisComponent,
		DashboardOverviewFooterComponent,
		DashboardOverviewDescriptionDirective,
		DashboardOverviewItemComponent
	]
})
export class UiComponentsDashboardOverviewModule {}
