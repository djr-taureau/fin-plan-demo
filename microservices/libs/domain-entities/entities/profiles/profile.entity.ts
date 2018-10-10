import { Entity, Column, OneToMany } from 'typeorm';

import { TrackedBaseEntity, Address } from '../../common';
import { ProfileAttribute } from './profile-attribute.entity';
import { CitizenshipStatus } from './citizenship-status';
import { Gender } from './gender';
import { MaritalStatus } from './marital-status';
import { ProfileContactInformation } from './profile-contact-info.entity';

@Entity('profiles')
export class Profile extends TrackedBaseEntity {

	@Column({ nullable: true })
	firstName?: string;

	@Column({ nullable: true })
	middleName?: string;

	@Column({ nullable: true })
	lastName?: string;

	@Column(type => Address)
	address?: Address;

	@Column({ nullable: true })
	email?: string;

	@Column("int", { nullable: true })
	gender?: Gender;

	@Column("datetime2", { nullable: true })
	dateOfBirth?: Date;

	@Column("int", { nullable: true })
	maritalStatus?: MaritalStatus;

	@Column("int", { nullable: true })
	citizenshipStatus?: CitizenshipStatus;

	@Column({ nullable: true })
	countryOfOrigin?: string;

	@OneToMany(type => ProfileAttribute, pa => pa.profile)
	attributes: ProfileAttribute[];

	@OneToMany(type => ProfileContactInformation, pci => pci.profile)
	contactInformation: ProfileContactInformation[];
}
