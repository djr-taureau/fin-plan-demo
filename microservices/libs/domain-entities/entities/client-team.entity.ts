import {
	Entity,
	OneToOne,
	ManyToMany,
	JoinTable,
	JoinColumn,
} from 'typeorm';
import { BaseEntity } from '../common';
import { FirmStaff } from './firm-staff.entity';
import { Client} from './client.entity';
import { Role} from './role.entity';
import { Permission} from './permission.entity';

@Entity('client-teams')
export class ClientTeamMember extends BaseEntity {
	@OneToOne(type => Client)
	@JoinColumn()
	client: Client;

	@OneToOne(type => FirmStaff)
	@JoinColumn()
	teamMember: FirmStaff;

	@ManyToMany(type => Role)
	@JoinTable({ name: 'client-team-roles' })
	teamRoles: Role[];

	@ManyToMany(type => Permission)
	@JoinTable({ name: 'client-team-permissions' })
	permissions: Permission[];
}