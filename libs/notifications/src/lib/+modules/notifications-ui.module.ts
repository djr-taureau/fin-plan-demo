import { NgModule } from '@angular/core';

import { AuthenticationModule } from '@lifeworks/authentication';
import { CommonModule } from '@lifeworks/common';
import { UiComponentsCoreModule } from '@lifeworks/ui-components';
import { UiComponentsDataListModule } from '@lifeworks/ui-components/data-list';
import { UiComponentsWidgetModule } from '@lifeworks/ui-components/widget';
import { UiComponentsButtonsModule } from '@lifeworks/ui-components/buttons';
import { UiComponentsIconsModule } from '@lifeworks/ui-components/icons';

const MODULES = [
	CommonModule,
	AuthenticationModule,
	UiComponentsCoreModule,
	UiComponentsDataListModule,
	UiComponentsWidgetModule,
	UiComponentsButtonsModule,
	UiComponentsIconsModule
];

@NgModule({
	imports: MODULES,
	exports: MODULES
})
export class NotificationsUIModule {}
