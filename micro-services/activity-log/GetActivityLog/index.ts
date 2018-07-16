import { SQL } from '../../utils/db/sql'

export function run(context, req) {
    context.log.info('JavaScript HTTP trigger function processed a request.');
    
    const db = new SQL();

    if(req.params.id !== undefined) {
        db.getRowById('activity_log', req.params.id)
        .then((result) => {
            context.res = {
                body: result
            }
            context.done();
        }).catch((err) => {
            context.log.error(err);
            context.done();
        });
    } else {
        db.getRows('activity_log')
        .then((result) => {
            context.res = {
                body: result
            }
            context.done();
        }).catch((err) => {
            context.log.error(err);
            context.done();
        });
    }
    
    
}