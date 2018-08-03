import { ActivityLogDb } from '../lib/repository';
import { handleError } from "../../utils/errors";
import { processResult, wrapResults } from "../../utils/processor";

const db = new ActivityLogDb();

export function run(context, req) {
    context.log.info('JavaScript HTTP trigger function processed a request.');

    // Wrap with a function decorateor
    if(req.params.id !== undefined) {
        db.getActivityLogByID(req.params.id)
        .then(processResult(context, [wrapResults]))
        .catch(handleError(context));
    } else {
        db.getAllActivityLogs()
        .then(processResult(context, [wrapResults]))
        .catch(handleError(context));
    }
}