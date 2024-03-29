import '../libs/typeorm/connect';
import { ProfileService } from '../libs/services';
import {
	errorResponse
} from '../libs/function-utilities';
import { Context, HttpRequest } from '../libs/azure-function-types';


export = async function run(context: Context, req: HttpRequest) {
    const profile = new ProfileService();
    
	try {
        if(req.query && req.query.guid) {
            const results = await profile.getProfile(req.query);
		    context.res.body = results;
        } else {
            throw errorResponse(Error('Request body requires a profile guid'));
        }
	} catch (err) {
		context.res.status = 500;
		context.res.body = errorResponse(err);
	}
}
