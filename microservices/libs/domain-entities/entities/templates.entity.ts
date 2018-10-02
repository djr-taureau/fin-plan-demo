
import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../common';

@Entity('templates')
export class Templates extends BaseEntity {

  @Column()
  name: string;

  @Column()
  displayName: string;

  @Column()
  path: string;

  @Column()
  system: boolean;

  @Column()
  template: string;

}