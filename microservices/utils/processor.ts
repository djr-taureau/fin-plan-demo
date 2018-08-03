import { reduce, assoc } from 'ramda';

type ProcessorFn = (input: any) => any;
//type ProcessorFn = <X,Y>(input: X) => Y;

export const swapAndCallFn = (a,v) => v(a);

export const processResult = (context, funcs: Array<ProcessorFn> = []) => (results) => {
      context.res.body = reduce(swapAndCallFn, results, funcs);
      context.done();
}

export const wrapResults = (results) => assoc('results', results, {})