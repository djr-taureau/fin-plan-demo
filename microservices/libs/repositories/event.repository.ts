import { 
  AbstractRepository,
  EntityRepository, 
  FindOneOptions,
  FindManyOptions,
  MoreThan} from "typeorm";
import { 
  basicError } from "./common";
import { Event, EntityContext } from "../domain-entities";

export interface GetEventsQueryOptions {
  pastEvents?: boolean
}

@EntityRepository(Event)
export class EventRepository extends AbstractRepository<Event> {

  /**
   * Create an Event
   * 
   * @param params 
   */
  async saveEvent(params: Array<Event>) {
    try {
      return await this.repository.save(params);
    } catch(err) {
      basicError(err);
    }
  }

  
  /**
   * Retrieve a single event based on guid
   * 
   * @param guid event guid
   */
  async getEvent(guid) {
    try {
      const query: FindOneOptions = {
        where: {
          guid: guid
        }
      }

      return await this.repository.findOne(query);
    } catch(err) {
      basicError(err);
    }
  }

  async getEvents(entityContext:EntityContext, options:GetEventsQueryOptions = { pastEvents: true }) {
    try {
      const query: FindManyOptions = {
        where: {
          context: {
            scope: entityContext.scope,
            entity: entityContext.entity
          },
        },
        order: {
          startTime: "ASC"
        }
      }

      if(!options.pastEvents) {
        query.where['startTime'] = MoreThan(new Date());
      }

      return await this.repository.find(query);
    } catch(err) {
      basicError(err);
    }
  }




}