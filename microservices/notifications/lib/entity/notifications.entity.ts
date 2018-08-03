import { Entity, Column } from 'typeorm';
import { CommonSchema } from "../../../utils/typeorm/entity";

@Entity('notifications')
export class NotificationSchema extends CommonSchema {

  @Column('varchar')
  message: string;

  @Column('bit')
  read: boolean;

}
