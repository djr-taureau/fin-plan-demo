import {
	Entity,
	Column,
	ManyToOne,
	JoinColumn,
} from 'typeorm';

import { TrackedBaseEntity, ProfileAttributeValueType } from '../../common';
import { Profile } from './profile.entity';


@Entity('profile-attributes')
export class ProfileAttribute extends TrackedBaseEntity {

	@ManyToOne( type => Profile, p => p.attributes )
	profile: Profile;

	@Column( {primary: true} )
	name: string;

	@Column()
	value: string;

	@Column('int')
	valueType: ProfileAttributeValueType;
}