import { PrimaryGeneratedColumn } from 'typeorm';

export abstract class CommonSchema {
  @PrimaryGeneratedColumn("uuid")
  GUID: string;
}
