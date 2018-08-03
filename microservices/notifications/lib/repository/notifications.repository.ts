import "reflect-metadata";
import { connection } from '../../../utils/typeorm/connection';
import { NotificationSchema } from '../entity';

const repository = connection(NotificationSchema).then(conn => conn.getRepository(NotificationSchema));

export class NotificationDb {

  public getAllNotifications() {
    return repository.then(repo => repo.find());
  }

  public getNotificationByID(GUID: number) {
    return repository.then(repo => repo.findOne(GUID));
  }

  public addOneNotificaiton(message: string) {
    return repository.then(repo => {
      return repo.save({message: message, read: false});
    });
  }

  public removeOneNotification(GUID: number) {
    return this.getNotificationByID(GUID).then(item => {
      return repository.then(repo => {
        return repo.remove(item);
      })
    })
  }

}