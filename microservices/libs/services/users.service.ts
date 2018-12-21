import { getCustomRepository } from 'typeorm';
import { 
    UsersRepository,
    ProfileRepository,
    ProfileAttributeRepository
} from '../repositories';
import { EventGridService } from './event-grid.service';
import { errorResponse } from '../function-utilities/format-responses';

const newSystemUserCreated = new EventGridService();

export class UsersService {
    private userRepo = getCustomRepository(UsersRepository);
    private profileRepo = getCustomRepository(ProfileRepository);
    private profileAttrRepo = getCustomRepository(ProfileAttributeRepository);

    async getUsers(params) {
        return await this.userRepo.query(params);
    }

    async getUser(params) {
      return await this.userRepo.getUser(params);
    }

    async createUser(param) {
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
              ];
      
              const profile = await this.profileRepo.createProfile(profileOptions);
              
              await this.profileAttrRepo.createProfileAttributes(profile.guid, profileAttributes);
      
              const user = await this.userRepo.createSystemUser(profile, param);
              


              await newSystemUserCreated.emitEvent(
                'pDK270TpdvD8fR9m/AiaO6dwLd73A4knEFK49zbHTUc=',
                'onsystemusercreated.eastus-1.eventgrid.azure.net',
                'NewSystemUserCreated',
                user
              );

              return user.guid;
            }
        } catch(err) {
            errorResponse(err);
        }
    }

}