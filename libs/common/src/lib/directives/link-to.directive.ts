import { Input, Directive, HostListener, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { canUse } from '@lifeworks/utilities';

@Directive({
	selector: '[lwLinkTo]'
})
export class LinkToDirective {

	// tslint:disable-next-line
	@Input('lwLinkTo') link: string;

	@HostBinding('class.clickable')
	get clickable() {
		return canUse(this.link);
	}

	constructor(private router: Router) {}

	@HostListener('click', ['$event'])
	onClick(event: MouseEvent) {
    console.log('LinkToArgs', event);

    if(/skip-container-click/.test(event.srcElement.className)) {
      return false;
    }

		if (canUse(this.link)) {
			this.router.navigateByUrl(this.link);
		} else {
			return false;
		}
	}
}
