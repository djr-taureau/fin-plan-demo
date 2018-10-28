import { NgModule } from '@angular/core';
import { MatTabsModule, MatIconModule } from '@angular/material';
import { UiComponentsLayoutsModule } from '@lifeworks/ui-components/layouts';

const MODULES = [MatTabsModule, MatIconModule, UiComponentsLayoutsModule];

@NgModule({
	exports: MODULES
})
export class PageNavigationUIModule {}
