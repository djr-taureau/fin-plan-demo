import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardOverviewComponent } from './value-callout/value-callout.component';
import { DashboardOverviewEmphasisComponent } from './value-callout-emphasis/value-callout-emphasis.component';
import { DashboardOverviewFooterComponent } from './value-callout-footer/value-callout-footer.component';
import { DashboardOverviewValueCalloutComponent } from './value-callout-item/value-callout-item.component';
@NgModule({
	imports: [CommonModule],
	declarations: [
		DashboardOverviewComponent,
		DashboardOverviewEmphasisComponent,
		DashboardOverviewFooterComponent,
		DashboardOverviewValueCalloutComponent
	],
	exports: [
		DashboardOverviewComponent,
		DashboardOverviewEmphasisComponent,
		DashboardOverviewFooterComponent,
		DashboardOverviewValueCalloutComponent
	]
})
export class UiComponentsValueCalloutModule {}
