import "../libs/typeorm/connect";
import { SettingsService } from '../libs/services';
import {
	errorResponse
} from '../libs/function-utilities';

export async function run(context, req) {
    const settings = new SettingsService();
    
	try {
		if(req.body && req.body.entityGuid) {
			await settings.createSetting(req.body);
			context.res.status = 200;
		} else {
			throw "Must pass an entityGuid to request body"
		}
	} catch (err) {
		context.res.status = 500;
		context.res.body = errorResponse(err);
	}
}