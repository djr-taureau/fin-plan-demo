import { ElementRef } from '@angular/core';

/**
 * Type for Constructor Functions
 */
export type Constructor<T> = new (...args: any[]) => T;

/**
 * Interface for private ElementRefs
 */
export interface HasElementRef {
	_elementRef: ElementRef;
}
