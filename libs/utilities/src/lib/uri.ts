import { when, isNil, ifElse, test, identity, prop, pipe, concat } from 'ramda';
import { notEmpty } from './logic';

const HAS_PROTOCOL = /^https?:\/\//i;

const getHostString = (l: Location) =>
    `${l.protocol}//${l.hostname}${getPortString(l.port)}`

const getPortString = when(notEmpty, p => `:${p}`)

const buildHostString = pipe(
    prop('origin'),
    when(isNil, getHostString)
);

const buildOrigin = concat(
    buildHostString(window.location)
);

export const getFullUrl = ifElse(
    test(HAS_PROTOCOL),
    identity,
    buildOrigin
)