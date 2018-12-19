import {
	EntityRepository,
	AbstractRepository,
	FindOneOptions, 
  FindManyOptions} from 'typeorm';
import { GetQueryOptions, GetFirmClientOptions, GetFirmOptions } from './common';
import { getPermissions } from '../function-utilities'
import { FirmClient, FirmStaff, Firm } from '../domain-entities';

@EntityRepository(Firm)
export class FirmRepository extends AbstractRepository<Firm> {

  async getFirm(guid:string, options: GetFirmOptions = {
    excludeFirmBillingAccount: false,
    excludeFirmStaff: false,
    excludeFirmClients: false
  }) {
    const relationships = [];

    //include FirmStaff
    if(!options.excludeFirmStaff) {
      relationships.push('staff', 'staff.user')
    }

    //Include firm billingaccount
    if(!options.excludeFirmBillingAccount) {
      relationships.push('billingAccount', 'billingAccount.owner')
    }

    //Include Firm Clients
    if(!options.excludeFirmClients) {
      relationships.push('clients', 'clients.client', 'clients.client.owner')
    }

    const query: FindManyOptions = {
      where: {
        guid: guid
      },
      relations: relationships
    }

    return await this.repository.find(query);
  }

}

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

  async getFirmClient(guid:string, options: GetFirmClientOptions = { excludeFirmClientMembers: false }) {
    const query: FindManyOptions = {
      where: {
        guid: guid
      },
      relations: (options.excludeFirmClientMembers) ? [] : ['client', 'client.owner', 'client.members', 'client.members.user']
    }

    return await this.repository.find(query);
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