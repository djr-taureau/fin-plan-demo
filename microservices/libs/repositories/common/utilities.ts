import { pick, keys, length, gt, has, propOr, assoc } from 'ramda';
import { FindManyOptions } from 'typeorm';

const pageOptions = pick(['skip', 'take']);
const hasSkipTake = params => gt(length(keys(params)), 0);
const hasSortBy = has('sortBy');

type propertyAccessorFn = (obj: {}) => string;

/**
 * Get paging options for using within a repository
 */
export function getPagingOptions<T>(query = {}, defaultSort = 'timestamp.createdOn', defaultSortDirection = 'DESC'): FindManyOptions<T> {
    const getSortBy: propertyAccessorFn = propOr(defaultSort, 'sortBy');
    const getSortDirection: propertyAccessorFn = propOr(defaultSortDirection, 'sortDirection');

    const skipTake = pageOptions(query);
    const sortObj = assoc(getSortBy(query), getSortDirection(query).toUpperCase(), {});

	if (hasSkipTake(query)) {
		return assoc('order', sortObj, skipTake);
    }
    
    if(hasSortBy(query)) {
        return assoc('order', sortObj, {}) as any;
    }

	return {};
}

export const basicError = err => {
    console.log(err);
    return err;
}
