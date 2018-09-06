import {
	Entity,
	Column,
	OneToOne,
	ManyToMany,
	ManyToOne,
	JoinTable,
	JoinColumn,
} from 'typeorm';
import { BaseEntity, TimeStamps } from '../common';
import { Firm } from './firm.entity';
import { User} from './user.entity';

@Entity('clients')
export class Client extends BaseEntity {
	@Column() displayName: string;

	@OneToOne(type => User)
	@JoinColumn() 
	owner: User;

	@ManyToMany(type=>User)
	@JoinTable({name: 'client-users'})
	users: User[];

	@ManyToOne(type => Firm, firm => firm.clients)
	firm: Firm;

	@Column(type => TimeStamps)
	timestamp: TimeStamps;
}