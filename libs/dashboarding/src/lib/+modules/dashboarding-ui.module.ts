import { NgModule } from '@angular/core';
import { UiComponentsValueCalloutModule } from '@lifeworks/ui-components/value-callout';
import { UiComponentsSummaryListModule } from '@lifeworks/ui-components/summary-list';
import { NotificationsModule } from '@lifeworks/notifications';
import { CommonModule } from '@lifeworks/common';
import { AuthenticationModule } from '@lifeworks/authentication';
import { ServicesModule } from '@lifeworks/services';
import { UiComponentsIconsModule } from '@lifeworks/ui-components/icons';

const MODULES = [
	CommonModule,
	AuthenticationModule,
	UiComponentsValueCalloutModule,
	UiComponentsSummaryListModule,
	UiComponentsIconsModule,
	NotificationsModule,
	ServicesModule
];

@NgModule({
	imports: MODULES,
	exports: MODULES
})
export class DashboardingUIModule {}
