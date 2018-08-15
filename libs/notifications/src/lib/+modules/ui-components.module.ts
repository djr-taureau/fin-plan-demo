import { NgModule } from '@angular/core';

import { CommonModule } from '@lifeworks/common';
import { UiComponentsCoreModule } from '@lifeworks/ui-components/core';
import { UiComponentsDataListModule } from '@lifeworks/ui-components/data-list';
import { UiComponentsWidgetModule } from '@lifeworks/ui-components/widget';

const MODULES = [
	CommonModule,
	UiComponentsCoreModule,
	UiComponentsDataListModule,
	UiComponentsWidgetModule
];

@NgModule({
	imports: MODULES,
	exports: MODULES
})
export class UIComponentsModule {}
