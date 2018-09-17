import { Column } from 'typeorm';

export class Address {
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
}
