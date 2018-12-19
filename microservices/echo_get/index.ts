import { UserContext } from '../libs/function-utilities';


export = async function(context, req) {
	context.log('JavaScript HTTP trigger function processed a request.');

    if(req.query.userContext) {
        context.res.body = UserContext.getUserContext(req)
        return;
    }

	if (req.query.env) {
		context.res.body = process.env;
		return;
	}

	if (req.query.all) {
		context.res.body = {
			env: process.env,
			req,
            context: JSON.parse(JSON.stringify( context)),
            userContext: UserContext.getUserContext(req)
		};
		return;
	}

    context.res.body = req;
	return;
};
