
import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../common';

@Entity('activity-logs')
export class ActivityLog extends BaseEntity {

  @Column()
  message: string;

  @Column("datetime2")
  occurrence: Date;

}