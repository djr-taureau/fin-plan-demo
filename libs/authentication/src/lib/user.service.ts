import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { getUser } from './+state/auth.selectors';
import { User } from './+state/auth.interfaces';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class UserService {
	constructor(private store: Store<any>) {}

	getUser(): Observable<User> {
		return this.store.pipe(select(getUser));
	}
}
