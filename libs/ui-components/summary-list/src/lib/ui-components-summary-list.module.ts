import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
	SummaryListComponent,
	SummaryListTitleDirective,
	SummaryListDescriptionDirective
} from './summary-list/summary-list.component';
import { SummaryListItemComponent } from './summary-list-item/summary-list-item.component';
import { SummaryListTargetComponent } from './summary-list-target/summary-list-target.component';
import { SummaryListLocationComponent } from './summary-list-location/summary-list-location.component';
@NgModule({
	imports: [CommonModule, RouterModule],
	declarations: [
		SummaryListComponent,
		SummaryListItemComponent,
		SummaryListTargetComponent,
		SummaryListTitleDirective,
		SummaryListDescriptionDirective,
		SummaryListLocationComponent
	],
	exports: [
		SummaryListComponent,
		SummaryListItemComponent,
		SummaryListTargetComponent,
		SummaryListTitleDirective,
		SummaryListDescriptionDirective,
		SummaryListLocationComponent
	]
})
export class UiComponentsSummaryListModule {}
