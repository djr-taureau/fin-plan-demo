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
    const body = req.body;
	try {
		if(params.entityScope && params.entityGuid && body) {
            const entityContext = {
                scope: EntityScope[capitalize(params.entityScope)],
                entity: params.entityGuid
            };
            
            const results = await events.createEvent(entityContext, body);

            context.bindings.res = {
                body: results.formedEvent
            }
            context.bindings.email = results.mail;
            context.bindings.message = results.message;
            return;
		} else {
			throw "Must pass a entityScope, entityGuid and request body"
		}
	} catch (err) {
		context.res.status = 500;
		context.res.body = errorResponse(err);
	}
}