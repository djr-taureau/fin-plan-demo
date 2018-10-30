import { Entity, Column, ManyToOne, Index, OneToMany, JoinColumn} from 'typeorm';
import { DescribedBaseEntity } from '../../common';

@Entity('system-tools')
export class SystemTool extends DescribedBaseEntity {
    @Column()
    internalName: string;

    @OneToMany(type => SystemToolResult, result => result.tool, { nullable: true })
    results: SystemToolResult[];
}

@Entity('system-tool-results')
@Index(["tool", "initiatorGuid", "contextGuid"])
export class SystemToolResult extends DescribedBaseEntity {
    @ManyToOne(type => SystemTool, tool => tool.results)
    @JoinColumn()
    public tool: SystemTool;
    
    @Column('uuid')
    initiatorGuid: string;
    
    @Column('uuid')
	contextGuid: string;

    @Column('nvarchar', {length: 'MAX'})
    variables: string;

    @Column('nvarchar', {length: 'MAX'})
    results: string;
}