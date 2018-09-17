export interface GetQueryOptions {
	guid: string;
}

export interface QueryOptions {
	skip?: number;
	take?: number;
	sortBy?: string;
	sortDirection?: 'ASC' | 'DESC';
	filter?: { [key: string]: string | number };
}
