import { map, difference, differenceWith, filter } from "ramda";
import { format } from "date-fns";
import { 
  EntityRepository,
  AbstractRepository,
  FindManyOptions,
  FindOneOptions
 } from 'typeorm';
 import { Statistics, StatisticAttribute, EntityContext } from '../domain-entities';
import { 
  basicError,
  StatisticAttributeQueryOptions,
  CreateStatisticQueryOptions,
  GetStatisticQueryOptions,
  UpdateStatisticQueryOptions,
  UpdateStatisticAttributeQueryOptions
 } from "./common";
 import { insertExtensions } from "../function-utilities";

@EntityRepository(Statistics)
export class StatisticRepository extends AbstractRepository<Statistics> {

  async createStatistic(params: CreateStatisticQueryOptions) {
    try {
      const statistic =  Object.assign(new Statistics(), { ...params });
      return await this.repository.save(statistic);
    } catch(err) {
      basicError(err);
    }
  }

  async getStatistics(entityContext:EntityContext, options:GetStatisticQueryOptions = { excludeAttributes: false }) {
    const query: FindOneOptions = {
      where: {
        context: entityContext
      },
      relations: (options.excludeAttributes) ? [] : ['attributes']
    }

    try {
      const statistics = await this.repository.findOne(query);

      if(!options.excludeAttributes) {
        if(statistics.attributes.length > 0) {
          return insertExtensions(statistics, statistics.attributes, {convertValueType: false});
        }
      }

      return statistics;
    } catch(err) {
      basicError(err);
    }

  }

  async updateStatistic(guid:string, params:UpdateStatisticQueryOptions) {
    return await this.repository.update(guid, { ...params });
  }

  async deleteStatistic(guid:string) {
    try {
      await this.repository.delete(guid);
    } catch(err) {
      basicError(err);
    }
  }

}


@EntityRepository(StatisticAttribute)
export class StatisticAttributeRepository extends AbstractRepository<StatisticAttribute> {

  async createStatisticAttributes(statisticID:string, params:Array<StatisticAttributeQueryOptions>) {
    const statisticFK = {
      guid: statisticID
    }

    const formAttribute = attr => Object.assign(
      new StatisticAttribute(),
      { ...attr, statistics: statisticFK }
    );

    try {
      const attributes: Array<StatisticAttribute> = map(formAttribute, params);
      return this.repository.save(attributes);
    } catch(err) {
      basicError(err);
    }

  }

  async updateStatisticAttributes(statisticID:string, options: Array<UpdateStatisticAttributeQueryOptions>) {
    const modificationDate = format(new Date(), "YYYY-MM-DD HH:mm:s.SS");
    const query:FindManyOptions = {
      where: {
        statistics: {
          guid: statisticID
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
        await this.createStatisticAttributes(statisticID, newAttributes);
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

  async deleteAllStatisticAttributes(statisticID) {
    try{
      return await this.repository.delete({ statistics: statisticID });
    } catch(err) {
      basicError(err);
    }
  }

}