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
	assoc
} from 'ramda';

const composeTemplateSelector = (key: string, selector: string) =>
	`__${key[0]}.${selector}`;

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
	return reduce((a, v) => replace(v[0], v[1], a), item.message, vals);
};
