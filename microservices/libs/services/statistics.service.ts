import { getCustomRepository } from "typeorm";
import { StatisticRepository, StatisticAttributeRepository } from "../repositories";

export class StatisticService {
  private statisticRepo = getCustomRepository(StatisticRepository);
  private statisticAttributeRepo = getCustomRepository(StatisticAttributeRepository);

  /**
   * 
   * @param params the req body
   * 
    ```
    params = {
      statistic: {
        context: EntityContext
      },
      attributes?: [
        {
          name: string,
          value: string,
          category: number (StatisticCategory enum)
        }
      ]
    }
    ```
   */
  async createStatistic(params) {
    try {
      const statistic = await this.statisticRepo.createStatistic(params.statistic);
      if(params.attributes) {
        await this.statisticAttributeRepo.createStatisticAttributes(statistic.guid, params.attributes);
      }
      return await this.statisticRepo.getStatistics(params.statistic.context);
    } catch(err) {
      return err;
    }
  }
  

  /**
   * 
   * @param params EntityContext
   ```
   params:EntityContext = {
     scope: EntityScope,
     entity: string
   }
   ```
   * 
   */
  async getStatistic(params) {
    try {
      return await this.statisticRepo.getStatistics(params);
    } catch(err) {
      return err;
    }
  }


  /**
   * 
   * @param params
   * 
   ```
   params = {
     guid: string //statistic guid,
     statistic?: object of any columns needed to be updated,
     attributes?: Array<StatisticAttributeQueryOptions>
   }
   ```
   */
  async updateStatistic(params) {
    try {
      if(params.statistic) {
        await this.statisticRepo.updateStatistic(params.guid, params.statistic);
      }

      if(params.attributes) {
        await this.statisticAttributeRepo.updateStatisticAttributes(params.guid, params.attributes);
      }

      return await this.statisticRepo.getStatistics(params.guid);
    } catch(err) {
      return new Error(err);
    }
  }


  /**
   * 
   * @param params 
   * 
   ```
   params = {
     guid: string
   }
   ```
   */
  async deleteStatistic(params) {
    try {
      await this.statisticAttributeRepo.deleteAllStatisticAttributes(params.guid);
      return await this.statisticRepo.deleteStatistic(params.guid)
    } catch(err) {
      return new Error(err);
    }
  }
}