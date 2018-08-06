import { when, isNil, ifElse, test, identity, prop, pipe, concat } from 'ramda';
import { notEmpty } from './logic';

const HAS_PROTOCOL_REGEX = /^https?:\/\//i;

/**
 * Test if a string contains `http://` or `https://`
 * @param {string} input the string to check
 * @returns {boolean} `true` or `false`
 */
const hasProtocol = test(HAS_PROTOCOL_REGEX);

const getPortString = when(notEmpty, p => `:${p}`);

const getHostString = (l: Location) =>
	`${l.protocol}//${l.hostname}${getPortString(l.port)}`;

const buildHostString = pipe(prop('origin'), when(isNil, getHostString));

const buildOrigin = concat(buildHostString(window.location));

export const getFullUrl = ifElse(hasProtocol, identity, buildOrigin);
