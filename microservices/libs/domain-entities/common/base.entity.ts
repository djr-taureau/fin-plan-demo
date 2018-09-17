import {
	Column,
	CreateDateColumn,
	PrimaryGeneratedColumn,
	UpdateDateColumn
} from 'typeorm';

export abstract class BaseEntity {
	@PrimaryGeneratedColumn('uuid') guid: string;
}

export abstract class TrackedBaseEntity extends BaseEntity {
	@CreateDateColumn()
	createdOn: Date;

	@UpdateDateColumn()
	modifiedOn: Date;
}

export abstract class TrackedEntity {
	@CreateDateColumn()
	createdOn: Date;

	@UpdateDateColumn()
	modifiedOn: Date;
}

export abstract class NamedBaseEntity extends TrackedBaseEntity {
	@Column() displayName: string;
}
