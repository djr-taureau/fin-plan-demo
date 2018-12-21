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
		if(params.guid && body) {
            const result = await events.updateEvent(params, body);
            context.res.body = result;
		} else {
			throw "Must pass an event guid, and request body"
		}
	} catch (err) {
		context.res.status = 500;
		context.res.body = errorResponse(err);
	}
}