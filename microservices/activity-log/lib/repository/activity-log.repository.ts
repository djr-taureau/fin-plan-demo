import "reflect-metadata";
import { promiseError } from '../../../utils/errors';

import { connection } from '../../../utils/typeorm/connection';
import { ActivityLog } from '../entity';

const repository = connection(ActivityLog)
  .then(conn => conn.getRepository(ActivityLog))
  .catch(promiseError);


export class ActivityLogDb {

  public getAllActivityLogs() {
     return repository
     .then(repo => repo.find())
     .catch(promiseError);
   }
 
   public getActivityLogByID(GUID: number) {
     return repository
     .then(repo => repo.findOne(GUID))
     .catch(promiseError);
   }

   public getActivityLogs(queryVars) {
    return repository
    .then(repo => {
        let query = repo.createQueryBuilder('activity_log');

        if(queryVars) {
          query.orderBy("activity_log.occurrence", "DESC")
        }
        if(queryVars.offset) {
          query.skip(queryVars.offset);
        }
        if(queryVars.limit) {
          query.take(queryVars.limit);
        }

        return query.getMany();
      }
    )
    .catch(promiseError);
  }
  
  public addActivityLogs(postData) {
    return repository
    .then(repo => {
      let insertQuery = repo.createQueryBuilder("activity_log").insert();
      
      const processedPostData = postData.map(data => {
        data.occurrence = `${new Date()}`;
        return data;
      });

      insertQuery.values(processedPostData);
      
      return insertQuery.execute();

    })
    .catch(promiseError);
  }
}