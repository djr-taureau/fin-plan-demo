import '../libs/typeorm/connect';
import { errorResponse } from '../libs/function-utilities';
import { Context, HttpRequest } from '../libs/azure-function-types';
import { AuthService } from '../libs/services';

export = async function run(context: Context, req: HttpRequest) {
	const auth = new AuthService();

	const id =
		req.body && req.body.lwUserGuid ? req.body.lwUserGuid : 'not_supplied';

	try {
		const lwUserPermissions = await auth.getUserPermissions(id);
		context.res.body = { lwUserPermissions };
	} catch (err) {
		context.res.status = 500;
		context.res.body = errorResponse(err);
	}
};
