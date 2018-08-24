import { NgModule } from '@angular/core';

import { UiComponentsNavigationModule } from '@lifeworks/ui-components/navigation';

const MODULES = [UiComponentsNavigationModule];

@NgModule({
	imports: MODULES,
	exports: MODULES
})
export class CoreUIModule {}
