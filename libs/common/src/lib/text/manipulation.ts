import { replace } from 'ramda';

/**
 * Remove the suppplied input from a string
 *
 * ```
 * removeFromString('hello')('hello world hello'); // ' world ';
 *
 * removeFromString(/hello/g)('hello world hello'); // ' world ';
 *
 * removeFromString(/hello/)('hello world hello'); // ' world hello';
 * ```
 */
export const removeFromString = (replacement: string | RegExp) =>
	replace(replacement, '');
