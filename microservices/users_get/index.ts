import "../libs/typeorm/connect";
import { UsersService } from '../libs/services';
import {
	queryResponse,
	errorResponse
} from '../libs/function-utilities';

export async function run(context, req) {
    const users = new UsersService();
    
	try {
		const results = await users.getUsers(req.query);
		context.res.body = queryResponse(req.query, results);
	} catch (err) {
		context.res.status = 500;
		context.res.body = errorResponse(err);
	}
}