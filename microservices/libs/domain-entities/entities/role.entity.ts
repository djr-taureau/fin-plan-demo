import {
	Entity,
	Column,
	ManyToMany,
	JoinTable
} from 'typeorm';
import { BaseEntity, TimeStamps } from '../common';
import { Permission } from './permission.entity';

export enum RoleScope {
	System,
	Firm,
	ClientTeam
}

@Entity('roles')
export class Role extends BaseEntity {
	@Column() name: string;

	@Column('text') description: string;

	@Column({ enum: RoleScope })
	scope: RoleScope;

	@ManyToMany(type => Permission)
	@JoinTable({name: 'role-permissions'})
	permissions: Permission[];
}