import {
	Entity,
	Column,
	ManyToOne,
	JoinColumn
} from 'typeorm';

import { TrackedEntity } from '../../common';
import { Profile } from './profile.entity';


@Entity('profile-attributes')
export class ProfileAttribute extends TrackedEntity {

	@ManyToOne(type => Profile, p => p.attributes, {primary: true})
	@JoinColumn()
	profile: Profile;

	@Column({primary: true})
	name: string;

	@Column()
	value: string;
}