import '../libs/typeorm/connect';
import { TeamMemberService } from '../libs/services';
import {
	errorResponse
} from '../libs/function-utilities';
import { Context, HttpRequest } from '../libs/azure-function-types';


export = async function run(context: Context, req: HttpRequest) {
    const teamMember = new TeamMemberService();
    
	try {
        if(req.body && req.body.guid) {
            await teamMember.removeTeamMember(req.body);
		    context.res.status = 200;
        } else {
            throw 'Request body requires a TeamMemeber guid';
        }
	} catch (err) {
		context.res.status = 500;
		context.res.body = errorResponse(err);
	}
}
