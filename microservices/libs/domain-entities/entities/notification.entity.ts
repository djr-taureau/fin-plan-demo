import { Entity, Column } from 'typeorm';
import { TrackedBaseEntity, EntityContext } from '../common';

@Entity('notifications')
export class Notification extends TrackedBaseEntity {

  @Column('varchar')
  message: string;

  @Column('bit')
  dismissed: boolean;

  @Column('varchar')
  notification_type: string

  @Column(type => EntityContext)
  context: EntityContext;
  
}
