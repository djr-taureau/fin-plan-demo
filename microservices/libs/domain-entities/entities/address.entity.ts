import { Column, Entity, Index } from 'typeorm';
import { TrackedBaseEntity } from '../common'

@Entity('address')
export class Address extends TrackedBaseEntity {
	@Column({ nullable: true })
	street1: string;

	@Column({ nullable: true })
	street2: string;
	
	@Column({ nullable: true })
	street3: string;
	
	@Column({ nullable: true })
	city: string;
	
	@Column({ nullable: true })
	stateProvence: string;
	
	@Column({ nullable: true })
	postalCode: string;
	
	@Column({ nullable: true })
	country: string;

	@Index()
	@Column('uuid')
	target: string;
}
