
import { Entity, Column } from 'typeorm';
import { CommonSchema } from "../../../utils/typeorm/entity";

@Entity('activity_log')
export class ActivityLog extends CommonSchema {

  @Column('varchar')
  message: string;

  //TODO: Set Default Time
  @Column({ 
    type: 'datetime',
  })
  occurrence: string;

}