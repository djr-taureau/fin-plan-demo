import {
    errorResponse,
} from '../libs/function-utilities';
import { Context, HttpRequest } from '../libs/azure-function-types';
import { MailService } from '../libs/services';

export async function run(context: Context, req:HttpRequest) {
    const mailService = new MailService();
	try {
        context.res.body = await mailService.systemEmailTemplate({
            to: [
                {name: "Justin Gauthier", email: 'justin@teambrightly.com'},
                {name: "Ezra Bertsch", email: 'ezra@teambrightly.com'}
            ],
            cc: { name: "Larry Faraglli", email: "larry@teambrightly.com"},
            bcc: [
                {name: "Jesse", email: 'jesse@teambrightly.com'},
                {name: "Ryan", email: 'ryan@teambrightly.com'}
            ],
            subject: "This is a text subject",
            from: {name: "evil justin", email: 'itsme@justingauthier.com'}
        }, 'email/passwordReset.html', {name: 'Bling Baby'});
	} catch (err) {
		context.res.status = 500;
		context.res.body = errorResponse(err);
	}
}