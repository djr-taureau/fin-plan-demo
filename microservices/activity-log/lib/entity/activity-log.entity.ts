import { Entity, Column } from 'typeorm';
import { CommonSchema } from "../../../utils/typeorm/entity";

@Entity('activity_log')
export class ActivityLogSchema extends CommonSchema {

  @Column('varchar')
  message: string;

  @Column('bit')
  read: boolean;

}
