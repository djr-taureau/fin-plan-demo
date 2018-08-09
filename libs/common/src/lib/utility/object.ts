import { chain, type, map, toPairs, fromPairs, either } from 'ramda';

/**
 * Flattens an object into an object with dot seperated property names
 *
 * ```
 * flattenObj({
 * 	a:'name',
 * 	b: {
 * 		c:'inner'
 * 	}
 * })
 * //Output
 * {
 * 	'a': 'name',
 * 	'b.c': 'inner'
 * }
 * ```
 */
export const flattenObj = obj => {
	const go = obj_ =>
		chain(([k, v]: Array<any>) => {
			if (type(v) === 'Object' || type(v) === 'Array') {
				return map(([k_, v_]) => [`${k}.${k_}`, v_], go(v));
			} else {
				return [[k, v]];
			}
		}, toPairs(obj_));

	return fromPairs(go(obj));
};
