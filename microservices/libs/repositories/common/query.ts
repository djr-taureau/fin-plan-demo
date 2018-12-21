import { EventCategory } from "../../domain-entities";
import { MembershipType, EntityContext } from "../../domain-entities/common";

/**
 * Common Interfaces
 */
export interface GetQueryOptions {
	guid: string;
}

export interface CommonDeleteQueryOptions {
	guid: string
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

/**
 * Profile Realted Interfaces
 */

export interface GetProfileOptions {
	excludeAttributes?: boolean;
	select?: Array<string>;
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

/**
 * Template Realted Interfaces
 */
export interface TemplateQueryOptions {
	name?: string
}

/**
 * User Realted Interfaces
 */
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

/**
 * Settings Realted Interfaces
 */
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

/**
 * Team Realted Interfaces
 */
export interface GetTeamMemberQueryOptions {
	entityGuid: string,
}

export interface CreateTeamMemberQueryOptions {
	entityGuid: string,
	membershipType: MembershipType
}

export interface UpdateTeamMemberQueryOptions {
	entityGuid?: string,
	membershipType?: MembershipType,
}


/**
 * System Roles/Permissions Realted Interfaces
 */
export interface CreateSystemPermissionsQuery {
	name: string,
	description: string,
	scope: number,
}

export interface CreateSystemRolesQueryOptions {
	name: string,
	description: string,
	scope: number,
	permissions?: Array<CreateSystemPermissionsQuery>
}

/**
 * Event Related Query Options
 */

 export interface CreateEventQueryOptions {
	startTime: Date,
	duration: number,
	title: string,
	description?: string,
	location?: string
	url?: string
	category?: EventCategory,
	organizer: string,
	attendees?: string,
	context: EntityContext
 }

export interface GetFirmClientOptions {
	excludeFirmClientMembers?: boolean
}

export interface GetFirmOptions {
	excludeFirmStaff?: boolean,
	excludeFirmBillingAccount?: boolean,
	excludeFirmClients?: boolean
}

/**
 * Statistics Related Interfaces
 */
export interface StatisticAttributeQueryOptions {
	name: string,
	value: string,
	category: number
}

export interface CreateStatisticQueryOptions {
	attributes: Array<StatisticAttributeQueryOptions>,
	context: EntityContext
}

export interface GetStatisticQueryOptions {
	excludeAttributes?: boolean;
	select?: Array<string>;
}

export interface UpdateStatisticQueryOptions {
	context?: EntityContext
}

export interface UpdateStatisticAttributeQueryOptions {
	name: string,
	value: string,
	category?: number
}


