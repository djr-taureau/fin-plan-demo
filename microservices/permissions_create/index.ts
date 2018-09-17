import "../libs/typeorm/connect";
import { PermissionsService } from '../libs/services';
import {
	errorResponse
} from '../libs/function-utilities';

export async function run(context, req) {
    const permissions = new PermissionsService();
    
	try {
		const results = await permissions.create(req.body);
		context.res.body = results;
	} catch (err) {
		context.res.status = 500;
		context.res.body = errorResponse(err);
	}
}