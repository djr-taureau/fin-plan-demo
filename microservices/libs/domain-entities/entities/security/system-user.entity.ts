import { Entity, Column, OneToOne, JoinColumn, ManyToMany, JoinTable, ManyToOne, Index, OneToMany } from 'typeorm';
import { NamedBaseEntity, EntityContext, TrackedBaseEntity } from '../../common';
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

@Entity('system-user-roles2')
export class SystemUserRole extends TrackedBaseEntity {
	@ManyToOne(type => SystemUser)
	user: SystemUser;

	@ManyToOne(type => SystemRole)
	role: SystemRole;

	@Column(type => EntityContext)
    context: EntityContext;
}
