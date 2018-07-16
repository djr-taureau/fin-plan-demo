import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
// import { catchError } from 'rxjs/operators';

import { NotificationsItem } from './models';
//import { HttpErrorHandler, HandleError } from '../http-error-handler.service';

// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type': 'application/json',
//     Authorization: 'my-auth-token'
//   })
// };

@Injectable({
  providedIn: 'root'
})
export class NotificationAPIService {
  notificationsUrl = 'https://0a712aa5-cdc0-4b03-8704-7b84574ba25c.mock.pstmn.io/notifications';
  constructor(private http: HttpClient) {}

  get(): Observable<NotificationsItem[]> {
    return this.http.get<NotificationsItem[]>(this.notificationsUrl);
  }
}
