import { Entity, OneToOne, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { TrackedBaseEntity } from '../../common';
import { FirmStaff } from './firm-staff.entity';
import { FirmClient } from './firm-client.entity';
import { SystemRole } from '../security';

@Entity('firm-client-team-members')
export class FirmClientTeamMember extends TrackedBaseEntity {
	@ManyToOne(type => FirmClient)
	client: FirmClient;

	@ManyToOne(type => FirmStaff)
	member: FirmStaff;

	@ManyToMany(type => SystemRole)
	@JoinTable({name: 'firm-client-team-roles'})
	roles: SystemRole[];
}
