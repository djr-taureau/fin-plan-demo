//tslint:disable: use-host-property-decorator directive-selector
import {
	Component,
	OnInit,
	HostBinding,
	Directive,
	ViewEncapsulation,
	Input
} from '@angular/core';

@Component({
	selector: 'lw-data-list',
	templateUrl: './data-list.component.html',
	styleUrls: ['./data-list.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class DataListComponent implements OnInit {
	constructor() {}

	@HostBinding('attr.role') role = 'list-item';
	@HostBinding('class.striped')
	@Input()
	striped = false;

	ngOnInit() {}
}

@Directive({
	selector: 'lw-data-list-item-header',
	host: { class: 'lw-data-list-item-header' }
})
export class DataListItemHeaderDirective {}

@Directive({
	selector: 'lw-data-list-item-indicator',
	host: { class: 'lw-data-list-item-indicator' }
})
export class DataListItemIndicatorDirective {}

@Directive({
	selector: '[lwDataListItemAction], lw-data-list-item-action',
	host: { class: 'lw-data-list-item-action' }
})
export class DataListItemActionDirective {}
