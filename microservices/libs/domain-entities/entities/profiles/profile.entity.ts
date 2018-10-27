import { Entity, Column, OneToMany } from 'typeorm';

import { TrackedBaseEntity } from '../../common';
import { ProfileAttribute } from './profile-attribute.entity';
import { Gender } from './gender';

enum ProfileType {
	Client = 0,
	Firm = 1,
	Relationship = 2,
}

@Entity('profiles')
export class Profile extends TrackedBaseEntity {

	@Column({ nullable: true })
	firstName?: string;

	@Column({ nullable: true })
	middleName?: string;

	@Column({ nullable: true })
	lastName?: string;

	@Column({ nullable: true })
	legalName?: string;

	@Column({ nullable: true })
	commonName?: string;

	@Column("int", { nullable: true })
	gender?: Gender;

	@Column("datetime2", { nullable: true })
	dateOfBirth?: Date;

	@OneToMany(type => ProfileAttribute, pa => pa.profile)
	attributes?: ProfileAttribute[];

	@Column('int')
	profileType: ProfileType;
}
