import { Entity, Column, ManyToOne, JoinColumn, OneToOne, Index, ManyToMany, JoinTable } from 'typeorm';

import { TrackedBaseEntity, NamedBaseEntity } from '../../../common';
import { IncomeAdjustments } from './income-adjustments.entity';
import { TaxationRule } from './income-taxation.entity';

/*
    Occupation
    Pension/Annuity
    Personal
    Government
*/
@Entity('income-classification-groups')
export class IncomeClassificationGroup extends NamedBaseEntity { 
    @Column({
        type: 'nvarchar',
        length: 'MAX',
        nullable: true
    })
    description?: string;
}

/*
Salary
Bonus
Expense Reimbursement
Stock Bonus
Real Estate Rental Income

Pension 
Social Security
Trust Income
Inheritance
Annuity Payments
Other
*/
@Entity('income-classifications')
export class IncomeClassification extends TrackedBaseEntity {
    @Column()
    name: string;

    @ManyToOne(type => IncomeClassificationGroup)
    @JoinColumn()
    group: IncomeClassificationGroup;

    @Index()
    @Column({
        type: 'char',
        length: 2
    })
    country: string;
}

@Entity('income')
export class EntityIncome extends NamedBaseEntity {
    @Column('uuid')
    recipient: string;

	@ManyToOne(type => IncomeClassification, { nullable: true })
	@JoinColumn()
    classification: IncomeClassification;

    @Column()
    customClassification: string;

    @Column({type: 'money'})
    amount: number;

    @ManyToOne(type => IncomeAdjustments, { nullable: true })
    @JoinColumn()
    adjustmentsSchedule?: IncomeAdjustments;

    @ManyToMany(type => TaxationRule)
    @JoinTable({name: 'income-taxation-rules'})
    taxationRules: TaxationRule[];
}