import { BaseRepository, QueryOptions } from './common';
import { User } from '../domain-entities';
import { EntityRepository } from 'typeorm';

@EntityRepository()
export class UsersRepository extends BaseRepository<User> {

  constructor() {
	  super('User');
  }

}