import {Entity, Column, Index} from 'typeorm';
import { TrackedBaseEntity, ValueType } from '../common';

enum StatusFlag {
  NotActive = 0,
  Active = 1,
  Removed = 3
}

@Entity('settings')
export class Settings extends TrackedBaseEntity {
  
  @Index()
  @Column()
  entityGuid: string;

  @Index()
  @Column()
  name: string;

  @Column()
  value: string;

  @Column('int')
  valueType: ValueType;

  @Column('int')
  statusFlag: StatusFlag;

}
