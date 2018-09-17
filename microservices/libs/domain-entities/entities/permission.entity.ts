import { Entity, Column, Index } from 'typeorm';
import { BaseEntity } from '../common';

export enum PermissionScope {
	ClientTeam = 0
}

@Entity('permissions')
export class Permission extends BaseEntity {
	@Column({ unique: true })
	name: string;

	@Column('text') description: string;

	@Index()
	@Column({ enum: PermissionScope })
	scope: PermissionScope;
}
