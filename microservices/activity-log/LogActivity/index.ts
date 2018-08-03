import { ActivityLogDb } from '../lib/repository';
import { handleError } from "../../utils/errors";
import { processResult, wrapResults } from "../../utils/processor";



const db = new ActivityLogDb();

export function run(context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if(req.body && req.body.message) {

        db.addOneActivityLog(req.body.message)
        .then(processResult(context, [wrapResults]))
        .catch(handleError(context));
        
    } else {
        context.res = {
            status: 400,
            body: "Please pass a message in the request body"
        };
        context.done();
    }

};