import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponentsLayoutsModule } from '@lifeworks/ui-components/layouts';
import { UiComponentsPageNavigationModule } from '@lifeworks/ui-components/page-navigation';
import { MatFormFieldModule, MatTableModule, MatCheckbox, MatCheckboxModule, MatInputModule, MatButtonModule } from '@angular/material';

const MODULES = [
  CommonModule,
  UiComponentsLayoutsModule,
  UiComponentsPageNavigationModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatTableModule,
  MatCheckboxModule,
]

@NgModule({
  imports: MODULES,
  exports: MODULES
})
export class ContentUiModule { }
