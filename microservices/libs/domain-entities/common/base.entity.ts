import {
	Column,
	CreateDateColumn,
	PrimaryGeneratedColumn,
	UpdateDateColumn
} from 'typeorm';

/**
 * An entity with `guid` as its **primary key**
 */
export abstract class BaseEntity {
	@PrimaryGeneratedColumn('uuid') guid: string;
}

/**
 * An entity with `guid` as its **primary key**
 * and timestamped fields for `createdOn, modifiedOn`
 */
export abstract class TrackedBaseEntity extends BaseEntity {
	//todo: Change class name to TimestampedBaseEntity

	@CreateDateColumn()
	createdOn: Date;

	@UpdateDateColumn()
	modifiedOn: Date;
}

/**
 * An entity with no **primary key**
 * and timestamped fields for `createdOn, modifiedOn`
 */
export abstract class TrackedEntity {
	//todo: Change class name to TimestampedEntity

	@CreateDateColumn()
	createdOn: Date;

	@UpdateDateColumn()
	modifiedOn: Date;
}

/**
 * An entity with `guid` as its **primary key**
 * and a `displayName` field and timestamped fields for `createdOn, modifiedOn`
 */
export abstract class NamedBaseEntity extends TrackedBaseEntity {
	//todo: Change class name to DisplayableBaseEntity
	@Column() displayName: string;
}

/**
 * An entity with `guid` as its **primary key**
 * and a `displayName` field and timestamped fields for `createdOn, modifiedOn`
 */
export abstract class DescribedBaseEntity extends NamedBaseEntity {
    @Column({
        type: 'nvarchar',
        length: 'MAX'
    })
    description: string;
}