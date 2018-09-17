import { Entity, Column, Index } from 'typeorm';
import { TrackedBaseEntity } from '../../common';
import { SecurityScope } from './security-scope';


@Entity('system-permissions')
export class SystemPermission extends TrackedBaseEntity {
	@Column({ unique: true })
	name: string;

	@Column('text') description: string;

	@Index()
	@Column()
	scope: SecurityScope;
}
