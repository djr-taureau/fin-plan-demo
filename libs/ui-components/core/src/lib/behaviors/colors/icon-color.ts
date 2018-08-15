import { ElementRef } from '@angular/core';
import { Constructor, HasElementRef } from '../constants';

export interface HasIconColor {
	iconColor: IconColorPalette;
}

/** Possible colors for text  */
export type IconColorPalette = 'green' | 'orange' | 'white' | undefined;
const DEAULT_PREFIX = 'lw-icon-color';
const DEFAULT_COLOR: IconColorPalette = 'orange';

/** Mixin to add a `color` property to a directive or component. */
export function mixinIconColor<T extends Constructor<HasElementRef>>(
	base: T,
	defaultColor: IconColorPalette = DEFAULT_COLOR,
	defaultClassPrefix = DEAULT_PREFIX
): Constructor<HasIconColor> & T {
	return class extends base {
		private _iconColor: IconColorPalette;

		get iconColor(): IconColorPalette {
			return this._iconColor;
		}
		set iconColor(value: IconColorPalette) {
			const colorPalette = value || defaultColor;

			// use native element so we do not have to
			// inject renderer2 everywhere we use this mix-in
			if (colorPalette !== this._iconColor) {
				if (this._iconColor) {
					this._elementRef.nativeElement.classList.remove(
						`${defaultClassPrefix}-${this._iconColor}`
					);
				}
				if (colorPalette) {
					this._elementRef.nativeElement.classList.add(
						`${defaultClassPrefix}-${colorPalette}`
					);
				}

				this._iconColor = colorPalette;
			}
		}

		constructor(...args: any[]) {
			super(...args);
			this.iconColor = defaultColor;
		}
	};
}
