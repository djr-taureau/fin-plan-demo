import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';

import { ClientAccount } from './client-account.entity';
import { ClientAffiliationRelationshipType } from './client-affiliation-relationship-type';
import { BaseEntity } from '../../common';

@Entity('client-affiliations')
export class ClientAffiliation extends BaseEntity {
	@ManyToOne(
		type => ClientAccount,
		clientAccount => clientAccount.affiliations
	)
	@JoinColumn()
	clientAccount: ClientAccount;

	@Column("int")
	relationship: ClientAffiliationRelationshipType;

	@Column() affiliateName: string;
}
