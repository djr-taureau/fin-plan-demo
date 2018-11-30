import { Entity, Column, ManyToMany, JoinTable, ManyToOne, JoinColumn } from 'typeorm';
import { NamedBaseEntity } from '../../common';
import { SystemPermission } from './system-permission.entity';
import { SecurityScope } from './security-scope';
import { SystemUser } from './system-user.entity';

@Entity('system-roles')
export class SystemRole extends NamedBaseEntity {
	@Column() name: string;

	@Column() description: string;

	@Column("int") scope: SecurityScope;

	@ManyToMany(type => SystemPermission)
	@JoinTable({ name: 'role-permissions' })
	permissions: SystemPermission[];
}
