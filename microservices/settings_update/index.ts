import "../libs/typeorm/connect";
import { SettingsService } from '../libs/services';
import {
	errorResponse
} from '../libs/function-utilities';

export async function run(context, req) {
    const settings = new SettingsService();
    
	try {
		if(req.body && req.body.guid) {
            context.res.status = 200;
            context.res.body = await settings.updateSettings(req.body);
		} else {
			throw "Must pass an entityGuid to query string";
		}
	} catch (err) {
		context.res.status = 500;
		context.res.body = errorResponse(err);
	}
}