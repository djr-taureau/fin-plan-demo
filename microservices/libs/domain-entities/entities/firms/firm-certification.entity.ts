import { Entity, OneToOne, JoinColumn, Column } from 'typeorm';
import { TrackedBaseEntity } from '../../common';
import { Firm } from './firm.entity';

@Entity('firm-certifications')
export class FirmCertification extends TrackedBaseEntity {
	@OneToOne(type => Firm)
	@JoinColumn()
	firm: Firm;
	
	@Column({ nullable: true })
	name: string;

	@Column({ nullable: true })
	image: string;
}
