import { getCustomRepository } from 'typeorm';
import { uniq, concat } from 'ramda';
import {
  ClientMemberRepository,
  FirmClientRepository,
  FirmStaffRepository,
  UsersRepository,
  ProfileRepository,
  ProfileAttributeRespository,
  Roles2Repository
} from '../repositories';
import { errorResponse } from '../function-utilities/format-responses';


export class AuthService {
  private clientRepo = getCustomRepository(ClientMemberRepository);
  private userRolesRepo = getCustomRepository(Roles2Repository);
  private firmRepo = getCustomRepository(FirmClientRepository);
  private firmStaffRepo = getCustomRepository(FirmStaffRepository);
  private userRepo = getCustomRepository(UsersRepository);
  private profileRepo = getCustomRepository(ProfileRepository);
  private profileAttrRepo = getCustomRepository(ProfileAttributeRespository);


  async getUserGuid(param) {
    try {
      const lwUserGuid = await this.userRepo.systemUserGuidQuery(param);
      if(lwUserGuid) {
        return lwUserGuid;
      } else {

        const profileOptions = {
          firstName: param.aadFirstName,
          lastName: param.aadLastName,
          profileType: 0
        }

        const profileAttributes = [
          {
            value: param.aadEmail,
            name: 'email',
            valueType: 1
          },
          {
            value: param.aadDisplayName,
            name: 'displayName',
            valueType: 2
          }
        ]

        const profile = await this.profileRepo.createProfile(profileOptions);
        
        await this.profileAttrRepo.createProfileAttributes(profile.guid, profileAttributes);

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
      return permissions

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