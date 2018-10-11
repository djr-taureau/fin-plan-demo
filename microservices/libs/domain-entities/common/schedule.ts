import { Column } from "typeorm";

/**
 * A Point in Time for a schedule
 * - string - Event Name
 * - date - Specified Date
 */
// type TimeMarker = string | Date;

export enum UnitOfTime {
    Seconds = 's',
    Minutes = 'm',
    Hours = 'h',
    Days = 'D',
    Weeks = 'W',
    Months = 'M',
    Years = 'Y'
}

export abstract class Frequency {
    @Column({nullable: true})
    value: number;

    @Column({type: 'char', nullable: true})
    unit: UnitOfTime;
}

export abstract class ScheduleTrigger {
    @Column({nullable: true})
    event?: string;

    @Column("datetime2", {nullable: true})
    date?: Date;
}

export abstract class ScheduleEndTrigger extends ScheduleTrigger {
    @Column({nullable: true})
    count?: number;
}

export class Schedule {
    @Column(type => ScheduleTrigger)
    start: ScheduleTrigger;

    @Column(type => Frequency)
    repeatFrequency?: Frequency;

    @Column({ length: 7, nullable: true })
    repeatOn?: string;

    @Column(type => ScheduleEndTrigger)
    repeatUntil?: ScheduleEndTrigger;
}