import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageLinkComponent, FillComponent } from './components';
import { BindTemplateDirective } from './directives';
import {
	SectionTitleComponent,
	SectionSubTitleComponent
} from './section-title/section-title.component';

@NgModule({
	imports: [CommonModule],
	declarations: [
		PageLinkComponent,
		FillComponent,
		BindTemplateDirective,
		SectionTitleComponent,
		SectionSubTitleComponent
	],
	exports: [
		PageLinkComponent,
		FillComponent,
		BindTemplateDirective,
		SectionTitleComponent,
		SectionSubTitleComponent,
	]
})
export class UiComponentsCoreModule {}
