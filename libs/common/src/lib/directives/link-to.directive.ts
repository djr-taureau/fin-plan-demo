import { Input, Directive, HostListener, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

import { isUseable } from '../utility';

@Directive({
	selector: '[lwLinkTo]'
})
export class LinkToDirective {
	// tslint:disable-next-line
	@Input('lwLinkTo') link: string;

	@HostBinding('class.clickable')
	get clickable() {
		return isUseable(this.link);
	}

	constructor(private router: Router) {}

	@HostListener('click', ['$event'])
	onClick(event: MouseEvent) {
		if (/skip-container-click/.test(event.srcElement.className)) {
			return false;
		}

		if (isUseable(this.link)) {
			this.router.navigateByUrl(this.link);
		} else {
			return false;
		}
	}
}
