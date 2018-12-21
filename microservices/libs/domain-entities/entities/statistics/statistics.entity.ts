import { Entity, Column, OneToMany } from 'typeorm';

import { TrackedBaseEntity, EntityContext } from "../../common";
import { StatisticAttribute } from './statistics-attribute.entity'

@Entity('statistics')
export class Statistics extends TrackedBaseEntity {

  @OneToMany(type => StatisticAttribute, s => s.statistics)
  attributes: StatisticAttribute[];

  @Column(type => EntityContext)
  context: EntityContext;

}