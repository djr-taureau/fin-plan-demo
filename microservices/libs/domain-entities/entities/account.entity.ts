import {
	Entity,
	Column,
	OneToOne,
	OneToMany,
	JoinColumn,
} from 'typeorm';
import { BaseEntity, TimeStamps } from '../common';
import { User } from './user.entity';
import { Firm } from './firm.entity';

@Entity('accounts')
export class Account extends BaseEntity {
	@Column() displayName: string;

	@OneToOne(type => User)
	@JoinColumn()
	owner: User;

	@OneToMany(type => Firm, firm => firm.account)
	firms: Firm[];

	@Column(type => TimeStamps)
	timestamp: TimeStamps;
}