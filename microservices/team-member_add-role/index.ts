import '../libs/typeorm/connect';
import { TeamMemberService } from '../libs/services';
import {
	errorResponse
} from '../libs/function-utilities';
import { Context, HttpRequest } from '../libs/azure-function-types';


export = async function run(context: Context, req: HttpRequest) {
    const teamMember = new TeamMemberService();
    
	try {
        if(req.body && req.params['team-member-guid'] != '') {
            const member = req.params['team-member-guid'];
            const roles = req.body;

            const results = await teamMember.addTeamMemberRoles(member, roles);
            context.res.body = results;
		    context.res.status = 200;
        } else {
            throw 'Request body and team-member-guid param required.'
        }
	} catch (err) {
		context.res.status = 500;
		context.res.body = errorResponse(err);
	}
}
