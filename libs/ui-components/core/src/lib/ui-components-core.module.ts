import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageLinkComponent, FillComponent } from './components';
import { BindTemplateDirective } from './directives';

@NgModule({
	imports: [CommonModule],
	declarations: [PageLinkComponent, FillComponent, BindTemplateDirective],
	exports: [PageLinkComponent, FillComponent, BindTemplateDirective]
})
export class UiComponentsCoreModule {}
