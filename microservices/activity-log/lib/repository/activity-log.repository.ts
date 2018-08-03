import "reflect-metadata";
import { connection } from '../../../utils/typeorm/connection';
import { ActivityLogSchema } from '../entity';

const repository = connection(ActivityLogSchema).then(conn => conn.getRepository(ActivityLogSchema));

export class ActivityLogDb {

  public getAllActivityLogs() {
     return repository.then(repo => repo.find());
   }
 
   public getActivityLogByID(GUID: number) {
     return repository.then(repo => repo.findOne(GUID));
   }
 
   public addOneActivityLog(message: string) {
     return repository.then(repo => {
       return repo.save({message: message, read: false});
     });
 
   }
 }