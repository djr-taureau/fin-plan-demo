import { Entity, OneToOne, ManyToOne, JoinColumn, ManyToMany, JoinTable, OneToMany, Column } from 'typeorm';
import { TrackedBaseEntity } from '../../common';
import { SystemUser, SystemRole } from '../security';
import { Firm } from './firm.entity';
import { FirmStaffCertification } from './firm-staff-certification.entity';

@Entity('firm-staff')
export class FirmStaff extends TrackedBaseEntity {
	@ManyToOne(type => Firm, firm => firm.staff)
	firm: Firm;

	@OneToOne(type => SystemUser)
	@JoinColumn()
	user: SystemUser;

	@OneToMany(type => FirmStaffCertification, fsc => fsc.member)
	certifications: FirmStaffCertification[];

	@ManyToMany(type => SystemRole)
	@JoinTable({name: 'firm-staff-roles'})
	roles: SystemRole[];

	@Column({ nullable: true })
	firmTitle?: string;

	@Column({ nullable: true })
	biography?: string;

	@Column({nullable: true})
	crdNumber?: string;
}
