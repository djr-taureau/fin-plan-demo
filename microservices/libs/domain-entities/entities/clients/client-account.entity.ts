import { Entity, OneToOne, OneToMany, JoinColumn } from 'typeorm';

import { NamedBaseEntity } from '../../common';
import { SystemUser } from '../security';
import { ClientMember } from './client-member.entity';
import { ClientRelationship } from './client-relationship.entity';
import { ClientAffiliation } from './client-affiliation.entity';


@Entity('client-accounts')
export class ClientAccount extends NamedBaseEntity {
	@OneToOne(type => SystemUser, { nullable: true })
	@JoinColumn()
	owner?: SystemUser;

	@OneToMany(type => ClientMember, clientMember => clientMember.clientAccount)
	members: ClientMember[];

	@OneToMany(
		type => ClientRelationship,
		clientRelationship => clientRelationship.clientAccount
	)
	relationships: ClientRelationship[];

	@OneToMany(
		type => ClientAffiliation,
		clientAffiliation => clientAffiliation.clientAccount
	)
	affiliations: ClientAffiliation[];
}
