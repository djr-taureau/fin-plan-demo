// import '../libs/typeorm/connect';
// import { AccountsService } from '../libs/services';
// import {
// 	queryResponse,
// 	errorResponse
// } from '../libs/function-utilities';
// import { Context, HttpRequest } from '../libs/azure-function-types';


export = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.', process.env);

    if(req.query.req) {
        context.res.body = JSON.stringify(req);
        return;
    }

    if(req.query.env) {
        context.res.body = JSON.stringify(process.env);
        return;
    }

    if(req.query.all) {
        context.res.body = JSON.stringify( {
            env: process.env,
            req,
            context: context
        });
        return;
    }
    
    context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    return;
};