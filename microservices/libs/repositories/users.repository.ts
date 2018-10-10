import { EntityRepository, AbstractRepository, FindOneOptions } from 'typeorm';
import { getPermissions } from '../function-utilities'
import { getPagingOptions, QueryOptions, basicError, GetUserGuidQueryOptions } from './common';
import { SystemUser, Profile, SystemRole } from '../domain-entities';

@EntityRepository(SystemUser)
export class UsersRepository extends AbstractRepository<SystemUser> {

  async query(options?: QueryOptions) {
		const pagingOptions = getPagingOptions(options);
		return await this.repository.findAndCount(pagingOptions);
  }

  async createSystemUser(profile: Profile, options: GetUserGuidQueryOptions) {
    try {
      const user = new SystemUser();
      user.providerId = options.aadGuid;
      user.displayName = options.aadDisplayName;
      user.profile = profile;
      return await this.repository.save(user);
    } catch(err) {
      basicError(err);
    }
  }

  async systemUserGuidQuery(options: GetUserGuidQueryOptions) {
    try {
      const query: FindOneOptions = {
        where: {
          providerId: options.aadGuid
        }
      }
      const results = await this.repository.findOne(query);
      return results.guid;
    } catch(err) {
      basicError(err);
    }
  }

  async getLwSystemUserPermissions(options?: QueryOptions) {
    try {
      const query: FindOneOptions = {
        where: {
          guid: options
        },
        relations: ['roles', 'roles.permissions']
      }

      const results = await this.repository.findOne(query);
      return getPermissions(results);
    } catch(err) {
      basicError(err);
    }
  }  
}