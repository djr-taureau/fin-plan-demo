import { EntitySchema } from 'typeorm';


export type QueryResult<T> = [T[],number];

export type EnityType<T> = string | Function | (new () => {}) | EntitySchema<T>
