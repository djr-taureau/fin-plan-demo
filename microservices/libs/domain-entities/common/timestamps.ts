import { UpdateDateColumn, CreateDateColumn } from 'typeorm';

export class TimeStamps {
    @UpdateDateColumn({
        name: "created_On"
    })
    createdOn: Date;

    @UpdateDateColumn({
        name: "modified_On"
    })
    modifiedOn: Date;
}