import { DescribedBaseEntity, TrackedBaseEntity, TrackedEntity } from "../../common";
import { Entity, Column, ManyToOne, OneToMany, Index } from "typeorm";
import { ValueType } from "../../common";

enum RelationshipEntityType {
	Profile = 0,
	Organization = 1
}

@Entity('relationship-definitions')
export class RelationshipDefinition extends DescribedBaseEntity {
	@Column()
	name: string;

	@Column({ nullable: true })
	inverseName: string;
}

@Entity('relationships')
export class Relationship extends TrackedBaseEntity {

	@Column('uuid')
	@Index()
	source: string;
	
	@Column('int')
	sourceType: RelationshipEntityType;

	@ManyToOne(type => RelationshipDefinition)
	relationship: RelationshipDefinition;

	@Column('uuid')
	@Index()
	target: string;
	
	@Column('int')
	targetType: RelationshipEntityType;
	
	@OneToMany(type => RelationshipAttribute, pa => pa.relationship)
	attributes: RelationshipAttribute[];
}

@Entity('relationship-attributes')
export class RelationshipAttribute extends TrackedEntity {
	@ManyToOne(type => Relationship, {primary: true})
	@Index()
	relationship: Relationship;

	@Column({primary: true})
	name: string;

	@Column({
        type: 'nvarchar',
        length: 'MAX'
    })
	value: string;

	@Column('int')
	type: ValueType;
}
