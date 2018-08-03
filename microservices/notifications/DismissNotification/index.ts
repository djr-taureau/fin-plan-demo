import { NotificationDb } from '../lib/repository';
import { handleError } from "../../utils/errors";


const db = new NotificationDb();

const dismissNotification = (GUID) => db.removeOneNotification(GUID);

export function run(context, queueMessage) {
    //comment test
    context.log('JavaScript queue trigger function processed work item', queueMessage);

    dismissNotification(queueMessage.GUID)
    .then(() => {
        context.log('JavaScript queue trigger function deleted a record from the database');
        context.done();
    })
    .catch(handleError(context));

};