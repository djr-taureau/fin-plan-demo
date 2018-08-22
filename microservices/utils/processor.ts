import { reduce, assoc, identity, concat } from 'ramda';

type ProcessorFn = (input: any) => any;

export const swapAndCallFn = (a,v) => v(a);

/**
 * Defauls for processResult
 */
export const wrapResults = results => assoc('results', results, []); //TODO: remove as export once other services updated
const originalRequest = req => results => assoc('originalRequest', identity(req.query), results);


export const processResult = (context, req, funcs: Array<ProcessorFn> = []) => (results) => {

      let loadedDefaults = concat([wrapResults , originalRequest(req)], funcs);
      
      let processedObject = reduce(swapAndCallFn, results, loadedDefaults);

      context.res.body = processedObject;
      context.done();
      
}

export const countResults = results => assoc('totalReturned', results.results.length, results);
export const totalRecords = total => results => assoc('totalRecords', total, results);