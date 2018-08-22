import "reflect-metadata";
import { connection } from '../../../utils/typeorm/connection';
import { ActivityLog } from '../entity';

const repository = connection(ActivityLog)
  .then(conn => conn.getRepository(ActivityLog))
  .catch(err => { throw new Error(err)} );

export class ActivityLogDb {

  public getAllActivityLogs() {
     return repository
     .then(repo => repo.find())
     .catch(err => {
       throw new Error(err);
      });
   }
 
   public getActivityLogByID(GUID: number) {
     return repository
     .then(repo => repo.findOne(GUID))
     .catch(err => {
      throw new Error(err);
     });
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

        return query.execute();
      }
    )
    .catch(err => {
     throw new Error(err);
    });
  }
 
   public addOneActivityLog(message: string) {
     return repository
     .then(repo => {
       return repo.save({message: message, read: false});
     })
     .catch(err => {
      throw new Error(err);
     });
   }
 }