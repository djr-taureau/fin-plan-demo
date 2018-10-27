import '../libs/typeorm/connect';
import { ProfileService } from '../libs/services';
import {
	queryResponse,
	errorResponse
} from '../libs/function-utilities';
import { Context, HttpRequest } from '../libs/azure-function-types';


export async function run(context: Context, req: HttpRequest) {
    const profile = new ProfileService();
    
	try {
        if(req.body && req.body.profile) {
            const results = await profile.createProfile(req.body);
		    context.res.body = results;
        } else {
            throw 'Request body requires a profile property'
        }
	} catch (err) {
		context.res.status = 500;
		context.res.body = errorResponse(err);
	}
}
