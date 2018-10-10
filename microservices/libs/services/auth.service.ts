import { getCustomRepository } from 'typeorm';
import { uniq, concat } from 'ramda';
import {
  ClientMemberRepository,
  FirmClientRepository,
  FirmStaffRepository,
  UsersRepository,
  ProfileRepository
} from '../repositories';
import { errorResponse } from '../function-utilities/format-responses';


export class AuthService {
  private clientRepo = getCustomRepository(ClientMemberRepository);
  private firmRepo = getCustomRepository(FirmClientRepository);
  private firmStaffRepo = getCustomRepository(FirmStaffRepository);
  private userRepo = getCustomRepository(UsersRepository);
  private profileRepo = getCustomRepository(ProfileRepository);


  async getUserGuid(param) {
    try {
      const lwUserGuid = await this.userRepo.systemUserGuidQuery(param);
      if(lwUserGuid) {
        return lwUserGuid;
      } else {
        const profile = await this.profileRepo.createProfile(param);
        const user = await this.userRepo.createSystemUser(profile, param);
        return user.guid;
      }
    } catch(err) {
      errorResponse(err);
    }
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
        throw 'lwClientGuid is Empty';
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
      const lwUserPermissions = await this.userRepo.getLwSystemUserPermissions(param);
      const lwFirmStaffPermissions = await this.firmStaffRepo.getLwFirmStaffPermissions(param);

      if(lwFirmStaffPermissions) {
        return uniq(concat(lwUserPermissions, lwFirmStaffPermissions));
      } else {  
        return lwUserPermissions;
      }
    } catch(err) {
      errorResponse(err);
    }
  }
}