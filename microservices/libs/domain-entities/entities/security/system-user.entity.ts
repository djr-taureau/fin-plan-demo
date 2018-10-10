import { Entity, Column, OneToOne, JoinColumn, ManyToMany, JoinTable } from 'typeorm';
import { NamedBaseEntity } from '../../common';
import { Profile } from '../profiles';
import { SystemRole } from './system-role.entity';

@Entity('system-users')
export class SystemUser extends NamedBaseEntity {
	@Column({ nullable: true })
	providerId?: string;

	@ManyToMany(type => SystemRole)
	@JoinTable({name: 'system-user-roles'})
	roles: SystemRole[];

	@OneToOne(type => Profile, { nullable: true })
	@JoinColumn()
	profile: Profile;
}
