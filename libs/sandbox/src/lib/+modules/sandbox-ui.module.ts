import { NgModule } from '@angular/core';
import { UiComponentsCoreModule } from '@lifeworks/ui-components';
import { UiComponentsValueListModule } from '@lifeworks/ui-components/value-list';


const MODULES = [
	UiComponentsCoreModule,
	UiComponentsValueListModule
]

@NgModule({
	imports: MODULES,
	exports: MODULES
})
export class SandboxUIModule {}
