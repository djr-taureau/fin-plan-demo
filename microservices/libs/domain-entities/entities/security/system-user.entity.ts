import { Entity, Column, OneToOne, JoinColumn } from 'typeorm';
import { NamedBaseEntity } from '../../common';
import { Profile } from '../profiles';

@Entity('system-users')
export class SystemUser extends NamedBaseEntity {
	@Column({ nullable: true })
	providerId?: string;

	@OneToOne(type => Profile, { nullable: true })
	@JoinColumn()
	profile: Profile;
}
