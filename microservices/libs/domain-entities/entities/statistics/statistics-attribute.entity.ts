import { Entity, Column, ManyToOne } from "typeorm";

import { TrackedBaseEntity } from '../../common';
import { Statistics } from './statistics.entity';
import { StatisticCategory } from './statistic-category';

@Entity('statistics-attribute')
export class StatisticAttribute extends TrackedBaseEntity {

  @ManyToOne(type => Statistics, s => s.attributes)
  statistics: Statistics;

  @Column()
  name: string;

  @Column()
  value: string;

  @Column('int')
  category: StatisticCategory;

}