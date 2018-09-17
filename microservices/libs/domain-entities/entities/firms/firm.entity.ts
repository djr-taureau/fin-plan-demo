import { Entity, Column, OneToMany, ManyToOne } from 'typeorm';
import { NamedBaseEntity } from '../../common';
import { FirmAccount } from './firm-account.entity';
import { FirmStaff } from './firm-staff.entity';
import { FirmClient } from './firm-client.entity';
import { FirmCertification } from './firm-certification.entity';

@Entity('firms')
export class Firm extends NamedBaseEntity {
	@ManyToOne(type => FirmAccount, firmAccount => firmAccount.firms)
	account: FirmAccount;	

	@Column({nullable: true})
	crdNumber?: string;

	@OneToMany(type => FirmStaff, firmStaff => firmStaff.firm)
	staff: FirmStaff[];

	@OneToMany(type => FirmClient, firmClient => firmClient.firm)
	clients: FirmClient[];

	@OneToMany(type => FirmCertification, fc => fc.firm)
	certifications: FirmCertification[];
}
