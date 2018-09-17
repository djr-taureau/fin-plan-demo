import { Entity, OneToOne, JoinColumn, Column } from 'typeorm';
import { TrackedBaseEntity } from '../../common';
import { FirmStaff } from './firm-staff.entity';

@Entity('firm-staff-certifications')
export class FirmStaffCertification extends TrackedBaseEntity {
	@OneToOne(type => FirmStaff)
	@JoinColumn()
	member: FirmStaff;
	
	@Column({ nullable: true })
	name: string;

	@Column({ nullable: true })
	image: string;
}
