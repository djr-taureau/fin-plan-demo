import { Entity, ManyToOne, ManyToMany, JoinTable, Column } from 'typeorm';
import { TeamMembership, MembershipType } from '../../common';
import { FirmStaff } from './firm-staff.entity';
import { SystemRole } from '../security';

@Entity('team-members')
export class TeamMember extends TeamMembership<FirmStaff> {
	@Column()
	entityGuid: string;

	@ManyToOne(type => FirmStaff)
	member: FirmStaff;

	@Column('int')
	membershipType: MembershipType;

	@ManyToMany(type => SystemRole)
	@JoinTable({name: 'team-member-roles'})
	claims?: SystemRole[];
}
