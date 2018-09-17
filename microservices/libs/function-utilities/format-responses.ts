import { QueryResult } from "../repositories/common";

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