import { Entity, Column } from 'typeorm';
import { BaseEntity, TimeStamps } from '../common';

@Entity('notifications')
export class Notification extends BaseEntity {

  @Column('varchar')
  message: string;

  @Column('bit')
  dismissed: boolean;

  @Column('varchar')
  notification_type: string
  
	@Column(type => TimeStamps)
	timestamp: TimeStamps;

}
