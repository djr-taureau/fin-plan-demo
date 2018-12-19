import { Entity, ManyToOne, OneToOne, JoinColumn } from 'typeorm';

import { TrackedEntity } from '../../common';
import { SystemUser } from '../security';
import { ClientAccount } from './client-account.entity';

@Entity('client-members')
export class ClientMember extends TrackedEntity {
	@ManyToOne(type => ClientAccount, clientAccount => clientAccount.members, { primary: true })
	clientAccount: ClientAccount;

	@OneToOne(type => SystemUser, { primary: true })
	@JoinColumn()
	user: SystemUser;
}