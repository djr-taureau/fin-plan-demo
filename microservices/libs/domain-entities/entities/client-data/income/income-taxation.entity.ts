import {
	Entity,
	Column,
	ManyToOne,
	Check,
	Tree,
	TreeParent,
	TreeChildren,
	Index,
	Unique,
	JoinTable
} from 'typeorm';

import {
	TrackedBaseEntity,
	NamedBaseEntity,
	ICustomizable,
	DescribedBaseEntity,
} from '../../../common';

/*
	//federal
	//federal/state
	//federal/state/county
	//federal/state/county/city
	//custom - 00
*/
@Entity('taxation-category')
@Tree('materialized-path')
@Unique(["name", "country"])
export class TaxationCategory extends TrackedBaseEntity {
	@Column() name: string;

	@Index()
	@Column({
		type: 'char',
        length: 2
	})
	country: string;

    @Column({
        type: 'nvarchar',
        length: 'MAX'
    })
    description: string;

	@TreeChildren() children: TaxationCategory[];

	@TreeParent() parent: TaxationCategory;
}


/*
    Federal //federal 
	State, //federal/state
	City, //federal/state/city
	SocialSecurity, //federal
	Medicare, //federal
	CapitalGainsShortTerm, //federal
	CapitalGainsLongTerm,  //federal
	NetInvestment, //federal
*/
@Entity('taxation-rules')
@Check('rate between 0 and 1')
@Check('portion between 0 and 1')
export class TaxationRule extends DescribedBaseEntity implements ICustomizable {

	@ManyToOne(type => TaxationCategory)
	@JoinTable()
    category: TaxationCategory;
    
    @Column({
		type: 'decimal',
		scale: 4,
		precision: 5
	})
    rate: number;
    
    @Column({
		type: 'decimal',
		scale: 4,
		precision: 5
	})
    portion: number;
    
    @Column({
		type: 'money',
		nullable: true
	})
	maximumValue?: number;

	@Column({default: false})
	isCustom: boolean;
}
