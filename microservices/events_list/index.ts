import "../libs/typeorm/connect";
import { EventsService } from '../libs/services';
import {
    errorResponse,
    capitalize
} from '../libs/function-utilities';
import { EntityScope } from "../libs/domain-entities";

export async function run(context, req) {
    const events = new EventsService();
    const params = req.params;
    const query = req.query;
	try {
		if(params.entityScope && params.entityGuid) {
            const entityContext = {
                scope: EntityScope[capitalize(params.entityScope)],
                entity: params.entityGuid
            };

            let results;
            if(query.pastEvents !== undefined && query.pastEvents === 'false') {
                results = await events.getEvents(entityContext, { pastEvents: false });
            } else {
                results = await events.getEvents(entityContext);
            }
            
            context.res.body = results;
		} else {
			throw "Must pass an entityScope and entityGuid"
		}
	} catch (err) {
		context.res.status = 500;
		context.res.body = errorResponse(err);
	}
}