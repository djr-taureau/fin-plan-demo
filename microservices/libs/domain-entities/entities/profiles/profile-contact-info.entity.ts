import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';

import { TrackedEntity } from '../../common';
import { Profile } from './profile.entity';


@Entity('profile-contact-information')
export class ProfileContactInformation extends TrackedEntity {
	@Column()
	isPrimary: boolean;

	@ManyToOne(type => Profile, p => p.attributes, {primary: true})
	@JoinColumn()
	profile: Profile;

	@Column({primary: true})
	name: string;

	@Column()
	value: string;
}
