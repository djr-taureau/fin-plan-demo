import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'lw-summary-list-target',
	templateUrl: './summary-list-target.component.html',
	styleUrls: ['./summary-list-target.component.scss']
})
export class SummaryListTargetComponent implements OnInit {
	@Input() location: string;
	constructor() {}

	ngOnInit() {}
}
