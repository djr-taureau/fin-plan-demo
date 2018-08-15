import { ElementRef } from '@angular/core';
import { Constructor, HasElementRef } from '../constants';

export interface HasTextColor {
	color: TextColorPalette;
}

/** Possible colors for text  */
export type TextColorPalette = 'green' | 'orange' | 'white' | undefined;
const DEFAULT_PREFIX = 'lw-text-color';
const DEFAULT_COLOR: TextColorPalette = 'orange';

/** Mixin to add a `color` property to a directive or component. */
export function mixinTextColor<T extends Constructor<HasElementRef>>(
	base: T,
	defaultColor: TextColorPalette = DEFAULT_COLOR,
	defaultClassPrefix = DEFAULT_PREFIX
): Constructor<HasTextColor> & T {
	return class extends base {
		private _color: TextColorPalette;

		get color(): TextColorPalette {
			return this._color;
		}
		set color(value: TextColorPalette) {
			const colorPalette = value || defaultColor;

			// use native element so we do not have to
			// inject renderer2 everywhere we use this mix-in
			if (colorPalette !== this._color) {
				if (this._color) {
					this._elementRef.nativeElement.classList.remove(
						`${defaultClassPrefix}-${this._color}`
					);
				}
				if (colorPalette) {
					this._elementRef.nativeElement.classList.add(
						`${defaultClassPrefix}-${colorPalette}`
					);
				}

				this._color = colorPalette;
			}
		}

		constructor(...args: any[]) {
			super(...args);
			this.color = defaultColor;
		}
	};
}
