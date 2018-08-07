import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NiceDatePipe } from './date';
import { ReplacePipe, PopulateMessageTemplatePipe } from './text';
import { ShellComponent } from './shell/shell.component';
import { UiComponentsNavigationModule } from '@lifeworks/ui-components/navigation';

@NgModule({
	imports: [CommonModule, RouterModule, UiComponentsNavigationModule],
	declarations: [NiceDatePipe, ReplacePipe, PopulateMessageTemplatePipe, ShellComponent],
	exports: [NiceDatePipe, ReplacePipe, PopulateMessageTemplatePipe, ShellComponent]
})
export class CoreModule {}
