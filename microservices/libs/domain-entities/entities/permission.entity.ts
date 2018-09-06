import {
	Entity,
	Column
} from 'typeorm';
import { BaseEntity } from '../common';

export enum PermissionScope {
	ClientTeam = 0
}

@Entity('permissions')
export class Permission extends BaseEntity {
	@Column() name: string;

	@Column('text') description: string;

	@Column({ enum: PermissionScope })
	scope: PermissionScope;
}