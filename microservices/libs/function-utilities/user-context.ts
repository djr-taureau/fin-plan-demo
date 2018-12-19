import { HttpRequest } from '../azure-function-types';
import { keyframes } from '@angular/animations';

const decode = require('jwt-claims');

const authorization = req => req.headers['authorization'];
const hasAuthHeaders = req => req && req.headers && req.headers['authorization'];
const hasBearerToken = token => token.startsWith('bearer ') || token.startsWith('Bearer ');
const bearerTokenValue = token => token.slice(7);
const decoder = value => { try { return decode(value); } catch {return null;}};
const getToken = value => hasBearerToken(value) ? bearerTokenValue(value) : value;

const TOKEN_PROPERTY_MAP =[
    ['lwUserGuid', 'userGuid'],
    ['lwClientGuid', 'clientGuid'],
    ['lwFirmClientGuid', 'firmClientGuid'],
    ['lwFirmGuid', 'firmGuid'],
    ['lwFirmAccountGuid', 'accountGuid'],
    ['lwUserPermissions', 'permissions']
];

const mapToUserContext = token => {
    const copyTokenValue = (target, [property, name]) => Object.assign(target, { [name]: token[property] });
    return TOKEN_PROPERTY_MAP.reduce(copyTokenValue, {});
};


/**
 * An Object which represents a UserContext obtained through a JWT
 * 
 * example
 * ```js
 * const userContext = UserContext.getUserContext(req);
 * const canDelete = userContext.hasPermission('canDelete');
 * ```
 */
export class UserContext  {
    userGuid: string;
    clientGuid: string;
    firmClientGuid: string;
    firmGuid: string;
    accountGuid: string;
    permissions: string[] = [];

    static getUserContext(req: HttpRequest) {
        // 1. Does it have an '(Aa)uthorization' header?
        //      yes) continue.
        //      no) return null.
        // 2. Does header value start with '(Bb)earer ' ?
        //      yes) extract the token
        //      no) assume value to be the token
        // 3. Decode JWT
        // 4. Did JWT Error
        //      yes) return null
        //      no) Build User Context
        // 5. Return User Context.
        if (!hasAuthHeaders(req)) {
            return null;
        }
        const tokenValue = decoder(getToken(authorization(req)));
        if (tokenValue === null) {
            return null;
        }
        return new UserContext(mapToUserContext(tokenValue));
    }

    hasPermission(permission: string) {
        return this.permissions.indexOf(permission) !== -1;
    }

    constructor(context = {}) {
        Object.keys(context).forEach(key => this[key] = context[key] );
    }
}