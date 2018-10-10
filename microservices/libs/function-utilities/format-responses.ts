import { QueryResult } from "../repositories/common";
import { uniq, map, prop, flatten } from 'ramda';

export function queryResponse<T>(params: {}, result: QueryResult<T>) {
    return {
        totalRecords: result[1],
        totalReturned: result[0].length,
        orginalRequest: {
            ...params
        },
        results: result[0]
    }
}

export function errorResponse(err: Error) {
    return {
        message: err.message
    }
}

export const getPermissions = results => uniq(map(prop('name'),flatten(map(prop('permissions'),prop('roles', results )))));;
