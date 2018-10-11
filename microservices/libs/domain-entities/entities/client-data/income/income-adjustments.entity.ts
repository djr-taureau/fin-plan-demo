import {
	Entity,
	ManyToOne,
	JoinColumn,
	OneToOne,
	OneToMany,
	Column
} from 'typeorm';

import { TrackedBaseEntity, Schedule, NamedBaseEntity, ICustomizable } from '../../../common';
import { EntityIncome } from './income.entity';

enum AdjustmentType {
	Value = 0,
	Percentage = 1
}

@Entity('income-adjustments')
export class IncomeAdjustments extends NamedBaseEntity implements ICustomizable {
	@Column(type => Schedule)
	options: Schedule;

	@Column("int")
	adjustmentType: AdjustmentType;

	@OneToMany(
		type => IncomeAdjustmentValue,
		incomeAdjustmentValue => incomeAdjustmentValue.adjustments
	)
	values: IncomeAdjustmentValue[];

	@Column({default: false})
	isCustom: boolean;
}

@Entity('income-adjustment-values')
export class IncomeAdjustmentValue extends TrackedBaseEntity {
	@Column({ type: 'money' })
	value: number;

	@Column()
	order: number;

	@ManyToOne(type => IncomeAdjustments)
	adjustments: IncomeAdjustments;
}