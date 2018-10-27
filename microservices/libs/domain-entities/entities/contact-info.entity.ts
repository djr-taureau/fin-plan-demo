import { Entity, Column, Index } from 'typeorm';

import { TrackedBaseEntity, ValueType } from '../common';

@Entity('contact-information')
export class ContactInformation extends TrackedBaseEntity {
	@Column()
	isTypePrimary: boolean;

	@Column({primary: true})
	name: string;

	@Column()
	value: string;

	@Column()
	valueType: ValueType;

	@Index()
	@Column('uuid')
	target: string;
}
