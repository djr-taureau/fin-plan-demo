import { Entity, Column, OneToOne, OneToMany, JoinColumn } from 'typeorm';
import { NamedBaseEntity } from '../../common';
import { SystemUser } from '../security';
import { Firm } from './firm.entity';
import { FirmAccountType } from './firm-account-type';

@Entity('firm-accounts')
export class FirmAccount extends NamedBaseEntity {
	@OneToOne(type => SystemUser)
	@JoinColumn()
	owner: SystemUser;

	@OneToMany(type => Firm, firm => firm.account)
	firms: Firm[];

	@Column() accountType: FirmAccountType;
}
