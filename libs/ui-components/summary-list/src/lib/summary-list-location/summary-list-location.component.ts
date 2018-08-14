import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'lw-summary-list-location',
	templateUrl: './summary-list-location.component.html',
	styleUrls: ['./summary-list-location.component.scss']
})
export class SummaryListLocationComponent implements OnInit {
	@Input() location: string;
	constructor() {}

	ngOnInit() {}
}
