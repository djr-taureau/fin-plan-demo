import {
	Constructor,
	NavigationLink,
	isNotUseable,
	isFalse
} from '@lifeworks/common';

export interface HasNavigation {
	location: NavigationLink;
	wrapWithAnchor: boolean;
	readonly noNavigation: boolean;
}

/** Mixin to add a `wrapWithAnchor` and `location` properties to a directive or component. */
export function mixinNavigation<T extends Constructor<{}>>(
	base: T
): Constructor<HasNavigation> & T {
	return class extends base {
		wrapWithAnchor: boolean;
		_location: NavigationLink;

		get noNavigation() {
			return isFalse(this.wrapWithAnchor) || isNotUseable(this.location);
		}

		get location() {
			return this._location;
		}
		set location(value: NavigationLink) {
			this._location = value;
		}

		constructor(...args: any[]) {
			super(...args);
			this.wrapWithAnchor = true;
		}
	};
}
