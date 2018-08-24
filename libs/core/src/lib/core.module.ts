import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ShellComponent } from './shell/shell.component';

import { CoreCoreModule, CoreUIModule } from './+modules';

@NgModule({
	imports: [CoreCoreModule, CoreUIModule],
	declarations: [ShellComponent],
	exports: [ShellComponent]
})
export class CoreModule {}
