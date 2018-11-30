import {
	EntityRepository,
	AbstractRepository,
	FindOneOptions } from 'typeorm';
import { GetQueryOptions } from './common';
import { getPermissions } from '../function-utilities'
import { FirmClient, FirmStaff } from '../domain-entities';

@EntityRepository(FirmClient)
export class FirmClientRepository extends AbstractRepository<FirmClient> {

  async firmClientContextGuidQuery(options: GetQueryOptions) {

    const query: FindOneOptions = {
      where: {
        client: {
          guid: options.guid //TODO: would like to not have to do this and make it similar to  client.repo
        }
      },
      relations: ['firm', 'firm.billingAccount']
    }

    try {
      const results = await this.repository.findOne(query);
      return {
        lwFirmClientGuid: results.guid,
        lwFirmGuid: results.firm.guid,
        lwFirmAccountGuid: results.firm.billingAccount.guid
      };
    } catch(e) {
      console.error(e);
      return null;
    }
    
  }

  async getById(options: GetQueryOptions) {
    return await this.repository.findOne(options);
  }

}

@EntityRepository(FirmStaff)
export class FirmStaffRepository extends AbstractRepository<FirmStaff> {

  async firmStaffContextGuidQuery(options: GetQueryOptions) {
    const query: FindOneOptions = {
      where: {
        user: {
          guid: options
        }
      },
      relations: ['firm', 'firm.billingAccount']
    }

    try {
      const results = await this.repository.findOne(query);
      return {
        lwFirmGuid: results.firm.guid,
        lwFirmAccountGuid: results.firm.billingAccount.guid
      };
    } catch(e) {
      console.error(e);
      return null;
    }
  }

  async getLwFirmStaffPermissions(options: GetQueryOptions) {
    const query: FindOneOptions = {
      where: {
        user: {
          guid: options
        }
      },
      relations: ['roles', 'roles.permissions']
    }

    try {
      const results = await this.repository.findOne(query);
      return getPermissions(results);
    } catch(e) {
      console.error(e);
      return null;
    }

    
  }

  async getById(options: GetQueryOptions) {
    return await this.repository.findOne(options);
  }

}