import { Entity, Column} from 'typeorm';
import { TrackedEntity } from '../../common';

@Entity('system-countries')
export class Country extends TrackedEntity {

    @Column({
        type: 'char',
        length: 2,
        primary: true
    })
    code: string;

    @Column({
        type: 'char',
        length: 3,
        select: false,
        unique: true
    })
    alpha3Code: string

    @Column({
        select: false,
        unique: true
    })
    numericCode: number;

    @Column()
    name: string;
}
