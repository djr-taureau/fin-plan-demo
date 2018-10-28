import { NgModule } from '@angular/core';
import {
	MatTableModule,
	MatDialogModule,
	MatButtonModule,
	MatIconModule,
	MatFormFieldModule,
	MatInputModule,
	MatRadioModule,
	MatSortModule,
	MatPaginatorModule,
	MatSelectModule,
	MatCheckboxModule,
	MatTreeModule,
	MatProgressBarModule,
	MatMenuModule
} from '@angular/material';

import { CommonModule } from '@lifeworks/common';
import { UiComponentsCoreModule } from '@lifeworks/ui-components';
import { UiComponentsPageLayoutsModule } from '@lifeworks/ui-components/page-layouts';
import { UiComponentsWidgetModule } from '@lifeworks/ui-components/widget';
import { UiComponentsLayoutsModule } from '@lifeworks/ui-components/layouts';
import { UiComponentsPageNavigationModule } from '@lifeworks/ui-components/page-navigation';
import { UiComponentsValueCalloutModule } from '@lifeworks/ui-components/value-callout';
import { UiComponentsIconsModule } from '@lifeworks/ui-components/icons';
import { NotificationsModule } from '@lifeworks/notifications';
import { UiComponentsTextListModule } from '@lifeworks/ui-components/text-list';

const MODULES = [
	CommonModule,
	MatTableModule,
	MatDialogModule,
	MatButtonModule,
	MatSelectModule,
	MatFormFieldModule,
	MatIconModule,
	MatInputModule,
	MatRadioModule,
	MatSortModule,
	MatPaginatorModule,
	MatCheckboxModule,
	MatTreeModule,
	MatProgressBarModule,
	MatMenuModule,
	UiComponentsCoreModule,
	UiComponentsPageLayoutsModule,
	UiComponentsWidgetModule,
	UiComponentsLayoutsModule,
	UiComponentsPageNavigationModule,
	UiComponentsValueCalloutModule,
	UiComponentsIconsModule,
	NotificationsModule,
	UiComponentsWidgetModule,
	UiComponentsTextListModule,
];

@NgModule({
	imports: MODULES,
	exports: MODULES
})
export class ClientsUIModule {}
