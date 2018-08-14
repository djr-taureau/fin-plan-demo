//tslint:disable: use-host-property-decorator directive-selector
import { Component, OnInit, ViewEncapsulation, Directive } from '@angular/core';

@Component({
	selector: 'lw-summary-list',
	templateUrl: './summary-list.component.html',
	styleUrls: ['./summary-list.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class SummaryListComponent implements OnInit {
	constructor() {}

	ngOnInit() {}
}

@Directive({
	selector: 'lw-summary-list-title',
	host: { class: 'lw-summary-list-title' }
})
export class SummaryListTitleDirective {}

@Directive({
	selector: 'lw-summary-list-description',
	host: { class: 'lw-summary-list-description' }
})
export class SummaryListDescriptionDirective {}
