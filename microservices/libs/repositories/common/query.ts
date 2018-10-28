export interface GetQueryOptions {
	guid: string;
}

export interface GetProfileOptions {
	excludeAttributes?: boolean;
	select?: Array<string>;
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

export interface CreateSettingsQueryOptions {
	entityGuid: string,
	name: string,
	value: any,
	valueType: number
}

export interface GetSettingsQueryOptions {
	entityGuid: string;
}

export interface UpdateSettingsQueryOptions {
	name?: string,
	value?: any,
	valueType?: number
}

export interface ProfileAttributesQueryOptions {
	name: string,
	value: string,
	valueType: number
}


export interface CreateProfileQueryOptions {
	profileType: number,
	firstName?: string,
	middleName?: string,
	lastName?: string,
	legalName?: string,
	commonName?: string,
	gender?: number,
	dateOfBirth?: string,
	attributes?: Array<ProfileAttributesQueryOptions>	
}

export interface UpdateProfileQueryOptions {
	profileType?: number,
	firstName?: string,
	middleName?: string,
	lastName?: string,
	legalName?: string,
	commonName?: string,
	gender?: number,
	dateOfBirth?: string,
	attributes?: Array<ProfileAttributesQueryOptions>	
}
