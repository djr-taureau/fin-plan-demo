import {
	Entity,
	Column,
	OneToMany,
	ManyToMany,
	JoinTable,
	ManyToOne,
} from 'typeorm';
import { BaseEntity, TimeStamps } from '../common';
import { Client } from './client.entity';
import { Account } from './account.entity';
import { Role } from './role.entity';
import { FirmStaff } from './firm-staff.entity';

@Entity('firms')
export class Firm extends BaseEntity {
	@Column() displayName: string;

	@ManyToOne(type => Account, account => account.firms)
	account: Account;

	@OneToMany(type => Client, client => client.firm)
	clients: Client[];

	@OneToMany(type => Client, client => client.firm)
	staff: FirmStaff[];

	@Column(type => TimeStamps)
	timestamp: TimeStamps;

	@ManyToMany(type => Role)
	@JoinTable({ name: 'firm-roles' })
	firmRoles: Role[];
}
