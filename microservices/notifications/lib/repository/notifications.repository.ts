import "reflect-metadata";
import { promiseError } from '../../../utils/errors';

import { connection } from '../../../utils/typeorm/connection';
import { NotificationSchema } from '../entity';

const repository = connection(NotificationSchema)
  .then(conn => conn.getRepository(NotificationSchema))
  .catch(promiseError);

export class NotificationDb {

  public getAllNotifications() {
    return repository
    .then(repo => repo.find())
    .catch(promiseError);
  }

  public getNotificationByID(GUID: number) {
    return repository.then(repo => repo.findOne(GUID));
  }

  public getNotifications(queryVars) {
    return repository
    .then(repo => {
        let query = repo.createQueryBuilder('notifications');

        if(queryVars) {
          query.orderBy("notifications.created_on", "DESC")
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

  public addNotificaitons(messageData) {
    return repository
    .then(repo => {
      let insertQuery = repo.createQueryBuilder("notifications").insert();
      
      const processedMessageData = messageData.map(data => {
        data.created_on = `${new Date()}`;
        data.modified_on = `${new Date()}`;
        data.dismissed = false;
        return data;
      });

      insertQuery.values(processedMessageData);
      
      return insertQuery.execute();

    })
    .catch(promiseError);
  }

  public dismissNotification(messageData) {
    return repository
    .then(repo => {
      let updateQuery = repo.createQueryBuilder("notifications").update();

      updateQuery.set({ dismissed: true, modified_on: `${new Date()}` });
      updateQuery.where("GUID = :GUID", { GUID: messageData.GUID });
      
      return updateQuery.execute();

    })
    .catch(promiseError);
  }

}