import { Entity, Column } from 'typeorm';
import { BaseEntity, TimeStamps } from '../common';

@Entity('users')
export class User extends BaseEntity {
	@Column({
		nullable: true
	})
	AZADID?: string;

	@Column() displayName: string;

	@Column() firstName: string;

	@Column() lastName: string;

	@Column() email: string;

	@Column(type => TimeStamps)
	timestamp: TimeStamps;
}
