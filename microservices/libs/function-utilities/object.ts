import { chain, type, map, toPairs, fromPairs, indexBy, prop, match, reduce, filter, uniq } from 'ramda';

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

/**
 * Coerced function for Ramda's `prop` function
 */
type PropertyStringFn<T> = (obj: T) => string;

/**
 * Creates an Object hash from an array of Entities using
 * the supplied property as the key
 */
export const indexByProp = <S extends keyof T, T>(
	propertyName: string,
	items: T[]
) => indexBy<T>(<PropertyStringFn<T>>prop(propertyName), items);


export const filterTreePair = (key, value, obj) => {
  const removeNumsDots = new RegExp(/([a-zA-Z])\w+/g);
  const theFilter = a => {
    const conditioned = match(removeNumsDots, a[0]).join('');
    return conditioned.includes(`${key}${value}`)
  }
  const reduction = (acc, item) => {
    const newArr = acc;
    newArr.push(item[1]);
    return newArr;
  }
  return uniq(reduce(reduction, [],
    filter(theFilter, toPairs(
    flattenObj(obj)
  ))));
}
