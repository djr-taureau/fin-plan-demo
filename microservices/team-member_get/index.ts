import '../libs/typeorm/connect';
import { TeamMemberService } from '../libs/services';
import {
	errorResponse
} from '../libs/function-utilities';
import { Context, HttpRequest } from '../libs/azure-function-types';


export = async function run(context: Context, req: HttpRequest) {
    const teamMember = new TeamMemberService();
    
	try {
        if(req.query && req.query.entityGuid) {
            const results = await teamMember.getEntityTeamMembers(req.query);
			context.res.status = 200;
			context.res.body = results;
        } else {
            throw 'Request body requires an entityGuid';
        }
	} catch (err) {
		context.res.status = 500;
		context.res.body = errorResponse(err);
	}
}
