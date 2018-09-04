import { NgModule } from '@angular/core';

import { ShellComponent } from './shell/shell.component';
import { AppNavigationComponent } from './components';

import { CoreCoreModule, CoreUIModule } from './+modules';

@NgModule({
	imports: [CoreCoreModule, CoreUIModule],
	declarations: [ShellComponent, AppNavigationComponent],
	exports: [ShellComponent, AppNavigationComponent]
})
export class CoreModule {}
