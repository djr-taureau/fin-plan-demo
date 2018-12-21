import "../libs/typeorm/connect";
import { EventsService } from '../libs/services';
import {
    errorResponse,
} from '../libs/function-utilities';
import { Context, HttpRequest } from '../libs/azure-function-types';

export async function run(context: Context, req:HttpRequest) {
    const events = new EventsService();
    const params = req.params;
    const query = req.query;
	try {
		if(params.guid && query.download) {
            if(query.download) {
                const eventDownload = await events.downloadIcs(params);
                context.res.headers = {
                    ...eventDownload.headers
                }
                context.res.body = eventDownload.body;
            }
		} else if(params.guid) {
            const event = await events.getEvent(params);
            context.res.body = event;
        } else {
			throw "Must pass a guid"
		}
	} catch (err) {
		context.res.status = 500;
		context.res.body = errorResponse(err);
	}
}