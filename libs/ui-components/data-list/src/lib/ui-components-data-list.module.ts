import { NgModule } from '@angular/core';
import { DataListCoreModule } from './+modules';

import {
	DataListComponent,
	DataListItemHeaderDirective,
	DataListItemIndicatorDirective,
	DataListItemActionDirective
} from './data-list/data-list.component';
import { DataListItemComponent } from './data-list-item/data-list-item.component';

@NgModule({
	imports: [DataListCoreModule],
	declarations: [
		DataListComponent,
		DataListItemComponent,
		DataListItemIndicatorDirective,
		DataListItemHeaderDirective,
		DataListItemActionDirective
	],
	exports: [
		DataListItemComponent,
		DataListComponent,
		DataListItemIndicatorDirective,
		DataListItemHeaderDirective,
		DataListItemActionDirective
	]
})
export class UiComponentsDataListModule {}
