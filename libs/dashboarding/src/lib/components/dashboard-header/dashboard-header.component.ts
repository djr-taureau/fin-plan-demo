//tslint:disable:use-host-property-decorator
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'lw-dashboard-header',
	templateUrl: './dashboard-header.component.html',
	styleUrls: ['./dashboard-header.component.scss'],
	encapsulation: ViewEncapsulation.None,
	host: { class: 'lw-dashboard-header' }
})
export class DashboardHeaderComponent implements OnInit {
	constructor() {}

	ngOnInit() {}
}
