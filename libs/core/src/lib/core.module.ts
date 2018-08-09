import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ShellComponent } from './shell/shell.component';
import { UiComponentsNavigationModule } from '@lifeworks/ui-components/navigation';

@NgModule({
	imports: [CommonModule, RouterModule, UiComponentsNavigationModule],
	declarations: [ShellComponent],
	exports: [ShellComponent]
})
export class CoreModule {}
