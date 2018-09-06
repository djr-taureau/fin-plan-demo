import { UpdateDateColumn, CreateDateColumn } from 'typeorm';

export class TimeStamps {
    @CreateDateColumn()
    createdOn: Date;

    @UpdateDateColumn()
    modifiedOn: Date;
}