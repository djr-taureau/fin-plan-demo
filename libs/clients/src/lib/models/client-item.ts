import { DomainEntityBase } from '@lifeworks/common';

export type ClientItems = Array<ClientItem>;

export enum ClientsScope {
	Account = 0,
	Firm = 1
}

export interface ClientItem extends DomainEntityBase {
	name: string;
	description: string;
}
