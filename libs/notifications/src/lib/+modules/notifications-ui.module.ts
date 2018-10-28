import { NgModule } from '@angular/core';

import { AuthenticationModule } from '@lifeworks/authentication';
import { CommonModule } from '@lifeworks/common';
import { UiComponentsCoreModule } from '@lifeworks/ui-components';
import { UiComponentsLayoutsModule } from '@lifeworks/ui-components/layouts';
import { UiComponentsDataListModule } from '@lifeworks/ui-components/data-list';
import { UiComponentsWidgetModule } from '@lifeworks/ui-components/widget';
import { UiComponentsButtonsModule } from '@lifeworks/ui-components/buttons';
import { UiComponentsIconsModule } from '@lifeworks/ui-components/icons';
import {
	MatSelectModule,
	MatInputModule,
	MatFormFieldModule,
	MatIconModule,
	MatButtonModule
} from '@angular/material';

const MODULES = [
	CommonModule,
	AuthenticationModule,
	UiComponentsCoreModule,
	UiComponentsDataListModule,
	UiComponentsWidgetModule,
	UiComponentsButtonsModule,
	UiComponentsIconsModule,
	UiComponentsLayoutsModule,
	MatSelectModule,
	MatInputModule,
	MatFormFieldModule,
	MatIconModule,
	MatButtonModule
];

@NgModule({
	imports: MODULES,
	exports: MODULES
})
export class NotificationsUIModule {}
