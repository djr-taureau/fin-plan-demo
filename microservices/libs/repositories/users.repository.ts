import { EntityRepository, AbstractRepository, FindOneOptions, FindConditions, FindManyOptions } from 'typeorm';
import { getPermissions } from '../function-utilities'
import { getPagingOptions, QueryOptions, basicError, GetUserGuidQueryOptions, GetQueryOptions } from './common';
import { SystemUser, Profile, SystemRole, SystemUserRole } from '../domain-entities';
import { pathOr, concat, pluck, uniq } from 'ramda';
@EntityRepository(SystemUser)
export class UsersRepository extends AbstractRepository<SystemUser> {

  async query(options?: QueryOptions) {
		const pagingOptions = getPagingOptions(options);
		return await this.repository.findAndCount(pagingOptions);
  }

  async getUser(params:GetQueryOptions, options = { excludeProfile: false } ) {
    try {
      const query: FindOneOptions = {
        where: {
          ...params
        },
        relations: (options.excludeProfile) ? [] : ['profile', 'profile.attributes']
      }
      return await this.repository.findOne(query);
    } catch(err) {
      basicError(err);
    }
    
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
      if(results) {
        return results.guid;
      } else {
        return false;
      }
      
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

@EntityRepository(SystemUserRole)
export class Roles2Repository extends AbstractRepository<SystemUserRole> {
  async getPermissions(options?: QueryOptions) {
    try {
      const query: FindManyOptions = {
        where: {
          userGuid: options
        },
        relations: ['role', 'role.permissions']
      }

      const results = await this.repository.find(query);
      const r = results.reduce((a,v)=> uniq(concat(a, pathOr([], ['role', 'permissions'], v))) , []);
      return pluck('name', r);
    } catch(err) {
      basicError(err);
    }
  }  
}
