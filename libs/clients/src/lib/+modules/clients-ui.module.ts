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
	MatPaginatorModule
} from '@angular/material';

import { CommonModule } from '@lifeworks/common';
import { UiComponentsCoreModule } from '@lifeworks/ui-components';
import { UiComponentsPageLayoutsModule } from '@lifeworks/ui-components/page-layouts';
import { UiComponentsWidgetModule } from '@lifeworks/ui-components/widget';

const MODULES = [
	CommonModule,
	MatTableModule,
	MatDialogModule,
	MatButtonModule,
	MatFormFieldModule,
	MatIconModule,
	MatInputModule,
	MatRadioModule,
	MatSortModule,
	MatPaginatorModule,
	UiComponentsCoreModule,
	UiComponentsPageLayoutsModule,
	UiComponentsWidgetModule
];

@NgModule({
	imports: MODULES,
	exports: MODULES
})
export class ClientsUIModule {}
