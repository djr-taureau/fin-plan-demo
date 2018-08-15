import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageLinkComponent, FillComponent } from './components';

@NgModule({
	imports: [CommonModule],
	declarations: [PageLinkComponent, FillComponent],
	exports: [PageLinkComponent, FillComponent]
})
export class UiComponentsCoreModule {}
