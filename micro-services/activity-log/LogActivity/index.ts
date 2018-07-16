import { SQL } from '../../utils/db/sql'

export function run(context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if(req.body && req.body.message) {
        const db = new SQL();
        db.insertRow('activity_log', [req.body.message, '0'])
            .then(result => {
                context.log('JavaScript HTTP trigger function inserted data into the database.');
                context.res = {
                    body: result
                };
                context.done();
            })
            .catch(err => {
                context.log.error("JavaScript HTTP trigger function error when inserting data into the database.");
                context.log.error(err);
                context.done();
            });
    } else {
        context.res = {
            status: 400,
            body: "Please pass a message in the request body"
        };
        context.done();
    }

};