import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
	DataListComponent,
	DataListTitleDirective,
	DataListAmountDirective,
	DataListMetaDirective
} from './data-list/data-list.component';
import { DataListItemComponent } from './data-list-item/data-list-item.component';
import { DataListImgComponent } from './data-list-img/data-list-img.component';
import { DataListContentComponent } from './data-list-content/data-list-content.component';
@NgModule({
	imports: [NgCommonModule, RouterModule],
	declarations: [
		DataListComponent,
		DataListItemComponent,
		DataListImgComponent,
		DataListTitleDirective,
		DataListAmountDirective,
		DataListMetaDirective,
		DataListContentComponent
	],
	exports: [
		DataListItemComponent,
		DataListComponent,
		DataListImgComponent,
		DataListTitleDirective,
		DataListAmountDirective,
		DataListMetaDirective,
		DataListContentComponent
	]
})
export class UiComponentsDataListModule {}
