import {Column, Entity} from 'typeorm';
import { TrackedBaseEntity, ValueType, EntityContext } from './';

@Entity('attributes')
export class Attribute extends TrackedBaseEntity {
  @Column(type => EntityContext)
  context: EntityContext;

	@Column( {primary: true} )
	name: string;

	@Column({
		type: "nvarchar",
		length: "MAX"
	})
	value: string;

	@Column('int')
	valueType: ValueType;
}