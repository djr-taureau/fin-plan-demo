// tslint:disable:use-host-property-decorator use-input-property-decorator
import { Component, ElementRef, ChangeDetectionStrategy } from '@angular/core';
import {
	mixinNavigation,
	HasNavigation,
	HasDataItemState,
	mixinDateItemState,
	mixinCssModifiers,
	ComponentHostBase
} from '@lifeworks/ui-components';

export const _DataListItemComponent = mixinNavigation(
	mixinDateItemState(mixinCssModifiers(ComponentHostBase))
);

@Component({
	selector: 'lw-data-list-item',
	exportAs: 'dataItem',
	inputs: ['item', 'location', 'wrapWithAnchor'],
	templateUrl: './data-list-item.component.html',
	styleUrls: ['./data-list-item.component.scss'],
	host: { class: 'lw-data-list-item' },
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataListItemComponent<T> extends _DataListItemComponent
	implements HasNavigation, HasDataItemState<T> {
	constructor(elementRef: ElementRef) {
		super(elementRef);
	}
}
