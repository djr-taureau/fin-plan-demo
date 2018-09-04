import { NgModule } from '@angular/core';

import { CommonModule } from '@lifeworks/common';
import { UiComponentsCoreModule } from '@lifeworks/ui-components';
import { UiComponentsPageNavigationModule } from '@lifeworks/ui-components/page-navigation';
import { UiComponentsPageLayoutsModule } from '@lifeworks/ui-components/page-layouts';

const MODULES = [
	CommonModule,
	UiComponentsCoreModule,
	UiComponentsPageLayoutsModule,
	UiComponentsPageNavigationModule
];

@NgModule({
	imports: MODULES,
	exports: MODULES
})
export class AppUIModule {}
