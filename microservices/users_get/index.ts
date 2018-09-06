import { UsersService } from '../libs/services';
import "../libs/typeorm/connect";


const users = new UsersService();

export async function run(context, req) {
    context.res.body = await users.getUsers(req.query);
}