import { getCustomRepository } from 'typeorm';
import {
  ClientMemberRepository,
  FirmClientRepository,
  FirmStaffRepository
} from '../repositories';


export class AuthService {
  private clientRepo = getCustomRepository(ClientMemberRepository);
  private firmRepo = getCustomRepository(FirmClientRepository);
  private firmStaffRepo = getCustomRepository(FirmStaffRepository);


  private async getLwClientGuid(params) {
    return await this.clientRepo.clientAccountGuidQuery(params);
  }

  private async getClientContextGuids(param) {
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
    } catch(e) {
      console.error('getClientContextGuids - Error: ', e);
      return null;
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

    } catch(e) {
      console.error('getLwFirmStaffContextGuids - Error: ', e);
      return null;
    }
  }

  async getUserContextGuids(param) {
    try {
      const lwClientGuids = await this.getClientContextGuids(param);
      if(lwClientGuids) {
        return lwClientGuids;
      } else {
        return await this.getLwFirmStaffContextGuids(param);
      }
    } catch(e) {
      console.error('getUserContextGuids - Error: ', e);
    }
  }

}