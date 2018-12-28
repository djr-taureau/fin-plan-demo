import { NgModule } from '@angular/core';
import { AuthenticationModule } from '@lifeworks/authentication';
import { CommonModule } from '@lifeworks/common';
import { MatDialogModule } from '@angular/material/dialog';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UiComponentsCoreModule } from '@lifeworks/ui-components';
import { UiComponentsLayoutsModule } from '@lifeworks/ui-components/layouts';
import { UiComponentsPageNavigationModule } from '@lifeworks/ui-components/page-navigation';
import { UiComponentsSideNavigationModule } from '@lifeworks/ui-components/side-navigation';
import { UiComponentsDataListModule } from '@lifeworks/ui-components/data-list';
import { UiComponentsWidgetModule } from '@lifeworks/ui-components/widget';
import { UiComponentsButtonsModule } from '@lifeworks/ui-components/buttons';
import { UiComponentsIconsModule } from '@lifeworks/ui-components/icons';
import { QuillModule, QuillConfigInterface, QUILL_CONFIG } from 'ngx-quill-wrapper';

import {
  MatListModule,
  MatTabsModule,
  MatSidenavModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatSelectModule,
  MatCheckboxModule,
	MatFormFieldModule,
	MatInputModule,
	MatIconModule,
  MatButtonModule,
  MatRadioModule,
  MatSlideToggleModule,
  MatDatepickerModule,
  MatNativeDateModule,
} from '@angular/material';


const MODULES = [
	CommonModule,
	AuthenticationModule,
	UiComponentsCoreModule,
	UiComponentsDataListModule,
	UiComponentsWidgetModule,
	UiComponentsButtonsModule,
  UiComponentsIconsModule,
  UiComponentsPageNavigationModule,
  UiComponentsSideNavigationModule,
  UiComponentsLayoutsModule,
  QuillModule,
  MatSidenavModule,
  MatTabsModule,
  MatListModule,
  MatTableModule,
  MatSortModule,
  MatPaginatorModule,
  MatSelectModule,
  MatCheckboxModule,
	MatInputModule,
	MatFormFieldModule,
	MatIconModule,
  MatButtonModule,
  MatDialogModule,
  MatRadioModule,
  MatSlideToggleModule,
  MatDatepickerModule,
  MatNativeDateModule,
  FormsModule,
  ReactiveFormsModule,
];

@NgModule({
	imports: MODULES,
	exports: MODULES
})
export class NotesUIModule {}
