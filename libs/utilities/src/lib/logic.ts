import { isNil, isEmpty, either, complement } from 'ramda';

/**
 * Determines if input is both Null and Empty
 *
 *  @param input
 *  @returns bool
 */
export const canUse = complement(either(isNil, isEmpty));
