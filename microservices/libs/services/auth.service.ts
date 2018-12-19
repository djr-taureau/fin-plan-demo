import { getCustomRepository } from 'typeorm';
import { uniq, concat } from 'ramda';
import {
  ClientMemberRepository,
  FirmClientRepository,
  FirmStaffRepository,
  Roles2Repository
} from '../repositories';
import { UsersService } from './users.service';
import { errorResponse } from '../function-utilities/format-responses';

export class AuthService {
  //Service
  private usersService = new UsersService();

  //Repositories
  private clientRepo = getCustomRepository(ClientMemberRepository);
  private userRolesRepo = getCustomRepository(Roles2Repository);
  private firmRepo = getCustomRepository(FirmClientRepository);
  private firmStaffRepo = getCustomRepository(FirmStaffRepository);

  async getUserGuid(param) {
    return await this.usersService.createUser(param);
  }

  private async getLwClientGuid(params) {
    return await this.clientRepo.clientAccountGuidQuery(params);
  }

  private async getLwClientContextGuids(param) {
    try {
      const lwClientGuid = await this.getLwClientGuid(param);
      //IF ^^^ goes to it's catch statement will this one go to its catch?
      if(lwClientGuid) {
        const queryParams = {
          guid: lwClientGuid
        }
        const lwFirmClientContextData = await this.firmRepo.firmClientContextGuidQuery(queryParams);
        
        return {
          lwClientGuid,
          ...lwFirmClientContextData,
        };
      } else {
        throw new Error('lwClientGuid is Empty');
      }
    } catch(err) {
      errorResponse(err);
    }
  }

  private async getLwFirmStaffContextGuids(param) {
    try {
      const lwFirmStaffContextData = await this.firmStaffRepo.firmStaffContextGuidQuery(param);

      return {
        lwClientGuid: null,
        lwFirmClientGuid: null,
        ...lwFirmStaffContextData
      };

    } catch(err) {
      errorResponse(err);
    }
  }

  async getUserContextGuids(param) {
    try {
      const lwClientGuids = await this.getLwClientContextGuids(param);
      if(lwClientGuids) {
        return lwClientGuids;
      } else {
        return await this.getLwFirmStaffContextGuids(param);
      }
    } catch(err) {
      errorResponse(err);
    }
  }

  async getUserPermissions(param) {
    try {
      const permissions = await this.userRolesRepo.getPermissions(param);
      return permissions;
    } catch(err) {
      errorResponse(err);
    }
  }
}