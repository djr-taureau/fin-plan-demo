import { Injectable } from '@angular/core';
import { DomainEntityBase } from '@lifeworks/common';
import { Observable, of } from 'rxjs';

export interface Role extends DomainEntityBase {
	name: string;
}

const ROLES: Array<Role> = [
	{ guid: '2a7556fd-1f19-4041-9c11-871d48e4fc7f', name: 'Advisor' },
	{ guid: '2053acfe-d950-41c0-a22a-9b5f52a91189', name: 'Sales Manager' },
	{
		guid: '332ed698-5648-48b6-9e74-77e1e246140e',
		name: 'Compliance Officer'
	},
	{ guid: '27effd84-d7ad-441d-9cfc-5dea1bc91943', name: 'Client' }
];

export type Roles = Array<Role>;

@Injectable({
	providedIn: 'root'
})
export class RolesService {
	getRoles(): Observable<Roles> {
		return of(ROLES);
	}
}
