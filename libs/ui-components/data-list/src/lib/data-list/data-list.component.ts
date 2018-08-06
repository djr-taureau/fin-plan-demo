//tslint:disable: use-host-property-decorator directive-selector
import {
	Component,
	OnInit,
	HostBinding,
	Directive,
	ViewEncapsulation
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

	ngOnInit() {}
}

@Directive({
	selector: 'lw-data-list-title',
	host: { class: 'lw-data-list-title' }
})
export class DataListTitleDirective {}

@Directive({
	selector: 'lw-data-list-meta',
	host: { class: 'lw-data-list-meta' }
})
export class DataListMetaDirective {}

@Directive({
	selector: 'lw-data-list-amount',
	host: { class: 'lw-data-list-amount' }
})
export class DataListAmountDirective {}
