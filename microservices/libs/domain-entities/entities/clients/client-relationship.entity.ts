import { Entity, Column, JoinColumn, ManyToOne, OneToOne } from 'typeorm';

import { ClientAccount } from './client-account.entity';
import { ClientRelationshipType } from './client-relationship-type';
import { Profile } from '../profiles';

@Entity('client-relationships')
export class ClientRelationship {
	@ManyToOne(type => ClientAccount, clientAccount => clientAccount.relationships, { primary: true })
	@JoinColumn()
	clientAccount: ClientAccount;

	@OneToOne(type => Profile, { primary: true })
	@JoinColumn()
	profile: Profile;

	@Column() relationship: ClientRelationshipType;

	@Column({ nullable: true }) fiscallyDependant: boolean;
}
