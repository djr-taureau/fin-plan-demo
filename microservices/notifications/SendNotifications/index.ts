import { NotificationDb } from '../lib/repository';
import { handleError } from "../../utils/errors";


const db = new NotificationDb();

/**
 * Function to add notification to the database
 * @param message the text of notification
 * @param read whether the notification has been read
 */
const sendNotification = (message) => db.addOneNotificaiton(message);

export function run(context, queueMessage) {
    context.log('JavaScript queue trigger function processed work item', queueMessage);

    sendNotification(queueMessage.message)
    .then(() => {
        context.log('Javascript queue trigger function inserted data into the data base');
        context.done();
    })
    .catch(handleError(context));
    
};