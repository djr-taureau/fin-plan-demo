import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'lw-data-list-item',
	templateUrl: './data-list-item.component.html',
	styleUrls: ['./data-list-item.component.scss'],
	// tslint:disable-next-line:use-host-property-decorator
	host: { class: 'lw-data-list-item' }
})
export class DataListItemComponent implements OnInit {
	@Input() location: string;
	@Input() showRemoveButton: Boolean = false;
	@Output() removeClicked = new EventEmitter();

	constructor() {}

	ngOnInit() {}

	raiseRemoveEvent() {
		this.removeClicked.emit();
	}
}
