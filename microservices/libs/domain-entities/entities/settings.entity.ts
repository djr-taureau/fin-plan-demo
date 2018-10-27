import {Entity, Column, Index} from 'typeorm';
import { TrackedEntity, SettingValueType } from '../common';

enum StatusFlag {
  NotActive = 0,
  Active = 1,
  Removed = 3
}

@Entity('settings')
export class Settings extends TrackedEntity {
  
  @Index()
  @Column()
  entityGuid: string;

  @Column()
  name: string;

  @Column()
  value: string;

  @Column('int')
  valueType: SettingValueType;

  @Column('int')
  statusFlag: StatusFlag;

}
