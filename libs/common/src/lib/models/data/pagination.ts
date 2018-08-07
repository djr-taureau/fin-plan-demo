export interface IPaginationHeader {
	totalRecords: number;
	totalReturned: number;
	originalRequest: { offset: number; limit: number };
}

export interface PaginationResult<T> extends IPaginationHeader {
	results: Array<T>;
}
