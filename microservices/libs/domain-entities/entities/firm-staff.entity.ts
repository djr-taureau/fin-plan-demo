import {
	Entity,
	Column,
	OneToOne,
	ManyToMany,
	JoinTable,
	ManyToOne,
	JoinColumn,
} from 'typeorm';
import { BaseEntity, TimeStamps } from '../common';
import { Role } from './role.entity';
import { User } from './user.entity';
import { Firm } from './firm.entity';


@Entity('firm-staff-users')
export class FirmStaff extends BaseEntity {
	@OneToOne(type => User)
	@JoinColumn()
	user: User;

	@ManyToOne(type => Firm, firm => firm.staff)
	@JoinColumn()
	firm: Firm;

	@ManyToMany(type => Role)
	@JoinTable({name: 'firm-staff-roles'})
	roles: Role[];

	@Column(type => TimeStamps)
	timestamp: TimeStamps;
}
