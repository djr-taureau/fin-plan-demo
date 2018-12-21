import {pipe, toPairs, filter, fromPairs, apply} from 'ramda';

export const filterWithKeys = (pred, obj) => pipe(
  toPairs,
  filter(apply(pred)) as any,
  fromPairs
)(obj);