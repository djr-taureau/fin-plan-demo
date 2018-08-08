import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
	DataListComponent,
	DataListTitleDirective,
	DataListAmountDirective,
	DataListMetaDirective
} from './data-list/data-list.component';
import { DataListItemComponent } from './data-list-item/data-list-item.component';
import { DataListHeaderComponent } from './data-list-header/data-list-header.component';
import { DataListImgComponent } from './data-list-img/data-list-img.component';
import { DataListContentComponent } from './data-list-content/data-list-content.component';
import { DataListHeaderLinkComponent } from './data-list-header-link/data-list-header-link.component';
@NgModule({
	imports: [CommonModule],
	declarations: [
		DataListComponent,
		DataListItemComponent,
		DataListHeaderComponent,
		DataListImgComponent,
		DataListTitleDirective,
		DataListAmountDirective,
		DataListMetaDirective,
		DataListContentComponent,
		DataListHeaderLinkComponent
	],
	exports: [
		DataListItemComponent,
		DataListHeaderComponent,
		DataListComponent,
		DataListImgComponent,
		DataListTitleDirective,
		DataListAmountDirective,
		DataListMetaDirective,
		DataListContentComponent,
		DataListHeaderLinkComponent
	]
})
export class UiComponentsDataListModule {}
