import { DomainEntityBase } from '@lifeworks/common';

export type PermissionItems = Array<PermissionItem>;

export enum PermissionsScope {
	Account = 0,
	Firm = 1
}

export interface PermissionItem extends DomainEntityBase {
	name: string;
	description: string;
	scope: PermissionsScope;
}
