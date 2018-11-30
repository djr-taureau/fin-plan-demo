import { Entity, Column, OneToOne, OneToMany, JoinColumn } from 'typeorm';
import { Subscription } from './subscription';

import { NamedBaseEntity } from '../../common';
import { SystemUser } from '../security';
import { Firm } from '../firms';

@Entity('billing-accounts')
export class BillingAccount extends NamedBaseEntity {
	@OneToOne(type => SystemUser)
	@JoinColumn()
	owner: SystemUser;

	@OneToMany(type => Firm, firm => firm.billingAccount)
	firms: Firm[];

	@Column("int")
	subscription: Subscription;
}
