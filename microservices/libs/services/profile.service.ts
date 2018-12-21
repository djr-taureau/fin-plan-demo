import { getCustomRepository } from 'typeorm';
import { ProfileRepository, ProfileAttributeRepository } from '../repositories';

export class ProfileService {
  private profileRepo = getCustomRepository(ProfileRepository);
  private profileAttributeRepo = getCustomRepository(ProfileAttributeRepository);

  async createProfile(params) {
    try {
      const profile = await this.profileRepo.createProfile(params.profile);
      if(params.attributes) {
        await this.profileAttributeRepo.createProfileAttributes(profile.guid, params.attributes);
      }
      return await this.profileRepo.getProfile(profile.guid);
    } catch(err) {
      return err;
    }
  }

  async updateProfile(params) {      
    try {
      //Update Profile
      if(params.profile) {
        await this.profileRepo.updateProfile(params.guid, params.profile);
      }
      //Update or Create Attributes
      if(params.attributes) {
        await this.profileAttributeRepo.updateProfileAttributes(params.guid, params.attributes);
      }
      // Return new Profile
      return await this.profileRepo.getProfile(params.guid);
    } catch(err) {
      return err;
    }
  }

  async deleteProfile(params) {
    try {
      const profile = await this.profileRepo.getProfile(params.guid, {
        select: ['profileType'],
        excludeAttributes: true
      });
      
      if(profile.profileType === 2) {
        await this.profileAttributeRepo.deleteAllProfileAttributes(params.guid);
        return await this.profileRepo.deleteProfile(params.guid);
      } else {
        throw new Error("Only ProfileType Relationship Allowed to be Deleted");
      }
      
    } catch(err) {
      return err;
    }
  }

  async getProfile(params) {
    try {
      return await this.profileRepo.getProfile(params.guid);
    } catch(err) {
      return err;
    }
  }
 }