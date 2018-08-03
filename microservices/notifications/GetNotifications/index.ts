import { NotificationDb } from '../lib/repository';
import { handleError } from "../../utils/errors";
import { processResult, wrapResults } from "../../utils/processor";


const db = new NotificationDb();

export function run(context, req) {
    context.log.info('JavaScript HTTP trigger function processed a request.');

    if(req.params.id !== undefined) {
        db.getNotificationByID(req.params.id)
        .then(processResult(context, [wrapResults]))
        .catch(handleError(context));
    } else {
        db.getAllNotifications()
        .then(processResult(context, [wrapResults]))
        .catch(handleError(context));
    }
    
    
}