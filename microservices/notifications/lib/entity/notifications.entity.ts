import { Entity, Column } from 'typeorm';
import { CommonSchema } from "../../../utils/typeorm/entity";

@Entity('notifications')
export class NotificationSchema extends CommonSchema {

  @Column('varchar')
  message: string;

  @Column('bit')
  dismissed: boolean;

  @Column('varchar')
  notification_type: string
  
  @Column({ 
    type: 'datetime',
  })
  created_on: string

  @Column({ 
    type: 'datetime',
  })
  modified_on: string

}
