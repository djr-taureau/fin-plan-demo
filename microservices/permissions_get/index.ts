import "../libs/typeorm/connect";
import { PermissionsService } from '../libs/services';
import {
	queryResponse,
	errorResponse
} from '../libs/function-utilities';

export = async function run(context, req) {
    const permissions = new PermissionsService();
    
	try {
		const results = await permissions.getPermissions(req.query);
		context.res.body = queryResponse(req.query, results);
	} catch (err) {
		context.res.status = 500;
		context.res.body = errorResponse(err);
	}
}