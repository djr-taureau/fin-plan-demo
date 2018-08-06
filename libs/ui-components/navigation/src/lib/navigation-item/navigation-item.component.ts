import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'lw-navigation-item',
	templateUrl: './navigation-item.component.html',
	styleUrls: ['./navigation-item.component.scss'],
	// tslint:disable-next-line:use-host-property-decorator
	host: { class: 'lw-navigation-item' },
	encapsulation: ViewEncapsulation.None
})
export class NavigationItemComponent implements OnInit {
	@Input() location: string;

	constructor() {}

	ngOnInit() {}
}
