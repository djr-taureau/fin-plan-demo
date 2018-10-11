import { NamedBaseEntity, ICustomizable } from "../../common";
import { Entity, Column } from "typeorm";

@Entity('organizations')
export class Organization extends NamedBaseEntity implements ICustomizable { 
	@Column({default: false})
	isCustom: boolean;
}