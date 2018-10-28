import { DomainEntityBase, Address, Phone } from '@lifeworks/common';

export type ClientItems = Array<ClientItem>;

export enum ClientsScope {
	Account = 0,
	Firm = 1
}

export enum ClientStatus {
	Prospect = 1,
	Archived = 2,
	Planning = 3,
	Implementation = 4
}

export interface ClientItem extends DomainEntityBase {
	name: string;
	description: string;
	preferredPhone: Phone;
	preferredEmail: string;
	preferredAddress: Address;
}
