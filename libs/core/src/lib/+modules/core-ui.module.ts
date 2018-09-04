import { NgModule } from '@angular/core';

import { UiComponentsSideNavigationModule } from '@lifeworks/ui-components/side-navigation';

const MODULES = [UiComponentsSideNavigationModule];

@NgModule({
	imports: MODULES,
	exports: MODULES
})
export class CoreUIModule {}
