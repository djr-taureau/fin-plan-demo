import { ElementRef } from '@angular/core';
import { Constructor, HasElementRef } from '../constants';

export interface HasColor {
	color: ColorPalette;
}

/** Possible colors for text  */
export type ColorPalette =
	| 'green'
	| 'orange'
	| 'blue'
	| 'white'
	| 'purple'
	| 'grey'
	| undefined;
const DEFAULT_PREFIX = 'lw-color';
const DEFAULT_COLOR: ColorPalette = 'white';

/** Mixin to add a `color` property to a directive or component. */
export function mixinColor<T extends Constructor<HasElementRef>>(
	base: T,
	defaultColor: ColorPalette = DEFAULT_COLOR,
	defaultClassPrefix = DEFAULT_PREFIX
): Constructor<HasColor> & T {
	return class extends base {
		private _color: ColorPalette;

		get color(): ColorPalette {
			return this._color;
		}
		set color(value: ColorPalette) {
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
