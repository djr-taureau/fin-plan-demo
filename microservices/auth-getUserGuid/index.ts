import '../libs/typeorm/connect';
import { errorResponse } from '../libs/function-utilities';
import { Context, HttpRequest } from '../libs/azure-function-types'
import { GetUserGuidQueryOptions } from '../libs/repositories/common'
import { AuthService } from '../libs/services';

export  = async function run(context: Context, req: HttpRequest) {
    const auth = new AuthService();

    const user: GetUserGuidQueryOptions = (req.body && req.body.aadGuid) ? req.body : '';

    try {
        return context.res.body = {
            lwUserGuid: await auth.getUserGuid(user)
        };
    } catch(err) {
        context.res.status = 500;
        context.res.body = errorResponse(err);
    }
}