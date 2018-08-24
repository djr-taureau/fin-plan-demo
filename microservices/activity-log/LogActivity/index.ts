import { ActivityLogDb } from '../lib/repository';
import { handleError } from "../../utils/errors";
import { processResult, wrapResults } from "../../utils/processor";


const db = new ActivityLogDb();

export function run(context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if(req.body) {

        db.addActivityLogs(req.body)
        .then(processResult(context, [wrapResults]))
        .catch(handleError(context));
        
    } else {
        context.res = {
            status: 400,
            body: "Please pass an Array of ActivityLogs"
        };
        context.done();
    }

};