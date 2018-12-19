
import { Entity, Column, CreateDateColumn, Index } from 'typeorm';
import { BaseEntity } from '../common';

@Entity('activity-logs')
export class ActivityLog extends BaseEntity {

  @Index()
  @Column('uuid')
  entityGuid: string;

  @Column()
  message: string;

  @CreateDateColumn()
  occurrence: Date;

}