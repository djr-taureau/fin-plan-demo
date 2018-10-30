import { Entity, Column} from 'typeorm';
import { DescribedBaseEntity } from '../../common';

@Entity('system-tools')
export class SystemTool extends DescribedBaseEntity {
    @Column()
    internalName: 'string';
}
