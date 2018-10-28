import { Entity, Column, Index } from 'typeorm';

import { TrackedBaseEntity} from '../common';

enum ContactInformationType {
	Phone = 0,
	Email = 1,
	Other = 2
}

@Entity('contact-information')
export class ContactInformation extends TrackedBaseEntity {
	@Column()
	isTypePrimary: boolean;

	@Column({primary: true})
	name: string;

	@Column()
	value: string;

	@Column('int')
	valueType: ContactInformationType;

	@Index()
	@Column('uuid')
	target: string;
}
