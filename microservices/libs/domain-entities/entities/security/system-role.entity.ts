import { Entity, Column, ManyToMany, JoinTable } from 'typeorm';
import { NamedBaseEntity } from '../../common';
import { SystemPermission } from './system-permission.entity';
import { SecurityScope } from './security-scope';

@Entity('roles')
export class SystemRole extends NamedBaseEntity {
	@Column() name: string;

	@Column() description: string;

	@Column("int") scope: SecurityScope;

	@ManyToMany(type => SystemPermission)
	@JoinTable({ name: 'role-permissions' })
	permissions: SystemPermission[];
}
