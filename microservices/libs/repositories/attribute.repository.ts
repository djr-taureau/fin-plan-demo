import { AbstractRepository, EntityRepository, FindManyOptions } from 'typeorm';
import { Attribute, EntityContext } from '../domain-entities';
import { basicError } from './common';

@EntityRepository(Attribute)
export class AttributeRepository extends AbstractRepository<Attribute> {
  async saveAttributes(attributes: Array<Attribute>) {
    try {
      return await this.repository.save(attributes);
    } catch(err) {
      basicError(err);
    }
  }

  async getAttributes(entityContext: EntityContext) {
    try {
      const query: FindManyOptions = {
        where: {
          context: {
            scope: entityContext.scope,
            entity: entityContext.entity
          }
        }
      }

      return await this.repository.find(query);

    } catch(err) {
      basicError(err);
    }
  }



}