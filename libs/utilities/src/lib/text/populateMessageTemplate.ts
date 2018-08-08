import {
	pick,
	reduce,
	map,
	concat,
	values,
	mapObjIndexed,
	toPairs,
	replace,
	path,
	assoc,
	ifElse,
	identity
} from 'ramda';

export const populateMessageTemplate = item => {
	let sources = pick(['target', 'event', 'source'], item);
	const eventSubject = path(['event', 'subject'], sources);
	sources = assoc('event', eventSubject, sources);
	const mapped = mapObjIndexed(
		(val: any, key) =>
			map(v => [composeTemplateSelector(key, v[0]), v[1]], toPairs(val)),
		sources
	);
	const vals = reduce((a, v) => concat(a, v), [], values(mapped));
	const transformedVals = map(uppercaseName, vals);
	return reduce(
		(a, v) => replace(v[0], v[1], a),
		item.message,
		transformedVals
	);
};

const composeTemplateSelector = (key, selector) => {
	return `__${key[0]}.${selector}`;
};

const containsPartial = subStr => array => {
	return array[0].includes(subStr);
};

const wrapValue = value => [value[0], value[1].toUpperCase()];

const formatArray = ifElse(containsPartial('fullName'), wrapValue, identity);

export const uppercaseName = array => formatArray(array);
