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

export interface QueryOptions {
	where?: { [key: string]: string | number };
	select?: string[];
	relations?: string[];
}
export interface TemplateQueryOptions {
	name?: string
}

export interface GetUserGuidQueryOptions {
	aadGuid: string,
}

export interface GetUserGuidQueryOptions {
	aadGuid: string,
	lwInviteCode?: string,
	aadFirstName: string,
	aadLastName: string,
	aadDisplayName: string,
	aadEmail: string
}
