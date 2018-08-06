import { isNil, isEmpty, either, complement, equals, test } from 'ramda';

/**
 * Determines if input is both Null and Empty
 *
 *  @param input
 *  @returns bool
 */
export const canUse = complement(either(isNil, isEmpty));

export const isTrue = equals(true);
export const isFalse = equals(false);
export const notEmpty = complement(isEmpty);
