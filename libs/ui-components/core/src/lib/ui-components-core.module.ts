import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
	FillComponent,
	SectionTitleComponent,
	SectionSubTitleComponent
} from './components';
import { BindTemplateDirective } from './directives';

@NgModule({
	imports: [CommonModule, RouterModule],
	declarations: [
		FillComponent,
		SectionTitleComponent,
		SectionSubTitleComponent,
		BindTemplateDirective
	],
	exports: [
		FillComponent,
		SectionTitleComponent,
		SectionSubTitleComponent,
		BindTemplateDirective
	]
})
export class UiComponentsCoreModule {}
