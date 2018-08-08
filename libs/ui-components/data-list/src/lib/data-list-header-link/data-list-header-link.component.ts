import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'lw-data-list-header-link',
	templateUrl: './data-list-header-link.component.html',
	styleUrls: ['./data-list-header-link.component.scss']
})
export class DataListHeaderLinkComponent implements OnInit {
	@Input() location: string;

	constructor(private router: Router) {}

	ngOnInit() {}

	@HostListener('click', ['$event'])
	onClick(e) {
		this.router.navigate([this.location]);
	}
}
