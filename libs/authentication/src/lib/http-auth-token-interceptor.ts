import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { AuthService } from './auth.service';

const wrapToken = token => `Bearer ${token}`;

@Injectable()
export class HttpAuthTokenInterceptor implements HttpInterceptor {

    constructor(private auth: AuthService) { }

    public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(/^\/config/.test(req.url)) {
            return from(next.handle(req.clone()))
        }

        return from(this.auth.getToken()
            .then(token => req.clone({
                setHeaders: {
                    Authorization: wrapToken(token),
                },
            }))
        ).pipe(mergeMap(r => next.handle(r)));
    }
}