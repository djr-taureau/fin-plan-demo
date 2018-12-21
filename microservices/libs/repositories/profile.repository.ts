import { 
  EntityRepository,
  AbstractRepository,
  FindOneOptions, 
  FindManyOptions} from 'typeorm';
import { 
  map,
  differenceWith,
  difference,
  filter } from 'ramda';
import { insertExtensions } from '../function-utilities';
import { format } from 'date-fns';
import { 
  basicError,
  CreateProfileQueryOptions,
  ProfileAttributesQueryOptions,
  UpdateProfileQueryOptions,
  GetProfileOptions } from './common';
import { Profile, ProfileAttribute } from '../domain-entities';

@EntityRepository(Profile)
export class ProfileRepository extends AbstractRepository<Profile> {

  async createProfile(options: CreateProfileQueryOptions) {
    try {
      const profile =  Object.assign(new Profile(), { ...options });
      return await this.repository.save(profile);
    } catch(err) {
      basicError(err);
    }
  } 

  async getProfile(guid, options: GetProfileOptions = { excludeAttributes: false }) {
    const query: FindOneOptions = {
      where: {
        guid: guid
      },
      relations: (options.excludeAttributes) ? [] : ['attributes']
    }

    if(options.select !== undefined && options.select.length > 0) {
      query.select = options.select;
    }

    try {
      const profile = await this.repository.findOne(query);

      if(!options.excludeAttributes) {
        if(profile.attributes.length > 0) {
          return insertExtensions(profile, profile.attributes, {convertValueType: false});
        }
      }

      return profile;

    } catch(err) {
      basicError(err);
    }
  }

  async updateProfile(guid, options: UpdateProfileQueryOptions) {
    return await this.repository.update(guid, { ...options });
  }

  async deleteProfile(guid) {
    try {
      await this.repository.delete(guid);
    } catch(err) {
      basicError(err);
    }
    
  }
}



@EntityRepository(ProfileAttribute)
export class ProfileAttributeRepository extends AbstractRepository<ProfileAttribute> {
  async createProfileAttributes(profileID, options: Array<ProfileAttributesQueryOptions>) {
    const profileFK = {
      guid: profileID
    }

    const formAttribute = attr => Object.assign(
      new ProfileAttribute(),
      { ...attr, profile: profileFK }
    );
    
    try {
      let attributes: Array<ProfileAttribute> = map(formAttribute, options);
      return await this.repository.save(attributes);
    } catch(err) {
      basicError(err);
    }
  }

  async updateProfileAttributes(profileID, options: Array<ProfileAttributesQueryOptions>) {
    const modificationDate = format(new Date(), "YYYY-MM-DD HH:mm:s.SS");
    const query:FindManyOptions = {
      where: {
        profile: {
          guid: profileID
        }
      }
    }
    try {
      const newAttr = (newAttr, oldAttr) => (newAttr.name === oldAttr.name);
      const updatedAttr = (newAttr, oldAttr) => (newAttr.name === oldAttr.name) && (newAttr.value === oldAttr.value);

      const currentAttributes = await this.repository.find(query);

      //Diff current attributes by the name proptery and determines what the new attributes are
      const newAttributes = differenceWith(newAttr, options, currentAttributes);

      //Diff the current attributes by the name property and determine which atribute values have been updated
      const updatedAttributes = difference(differenceWith(updatedAttr, options, currentAttributes), newAttributes);

      //Create new Attributes
      if(newAttributes.length > 0) {
        await this.createProfileAttributes(profileID, newAttributes);
      }

      //Update attributes that have changes
      if(updatedAttributes.length > 0) {
        
        //Constructs new attribute from the incoming updates
        const updateAtrribute = currentAttr => {
          const selectIncomingAttibute = obj => obj.name === currentAttr.name;
          const incomingAttribute = filter(selectIncomingAttibute, updatedAttributes);
          if(incomingAttribute.length > 0) {
            return Object.assign(currentAttr, { ...incomingAttribute[0], modifiedOn: modificationDate });
          } else {
            return currentAttr;
          }
        }

        const attributes = map(updateAtrribute, currentAttributes);
        await this.repository.save(attributes);
      }

      return await this.repository.find(query);

    } catch(err) {
      basicError(err);
    }
  }

  async deleteAllProfileAttributes(profileID) {
    return await this.repository.delete({profile: profileID});
  }
}