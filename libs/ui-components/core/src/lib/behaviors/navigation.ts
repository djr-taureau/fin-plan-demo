import { ElementRef } from '@angular/core';
import { ngRouterLink, isNotUseable, isFalse } from '@lifeworks/common';
import { Constructor } from './constructor';

export interface HasNavigation {
	location: ngRouterLink;
	wrapWithAnchor: boolean;
	readonly noNavigation: boolean;
}

/** Mixin to add a `color` property to a directive or component. */
export function mixinNavigation<T extends Constructor<{}>>(
	base: T
): Constructor<HasNavigation> & T {
	return class extends base {
		wrapWithAnchor: boolean;
		_location: ngRouterLink;

		get noNavigation() {
			return isFalse(this.wrapWithAnchor) || isNotUseable(this.location);
		}

		get location() {
			return this._location;
		}
		set location(value: ngRouterLink) {
			this._location = value;
		}

		constructor(...args: any[]) {
			super(...args);
			this.wrapWithAnchor = false;
		}
	};
}
