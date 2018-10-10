import { EntityRepository, AbstractRepository, FindOneOptions } from 'typeorm';
import { basicError, GetUserGuidQueryOptions } from './common';
import { Profile } from '../domain-entities';

@EntityRepository(Profile)
export class ProfileRepository extends AbstractRepository<Profile> {

  async createProfile(options: GetUserGuidQueryOptions) {
    try {
      const profile = new Profile();
      profile.firstName = options.aadFirstName;
      profile.lastName = options.aadLastName;
      profile.email = options.aadEmail;
      return await this.repository.save(profile);
    } catch(err) {
      basicError(err);
    }
  } 
}