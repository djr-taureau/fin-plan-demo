import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { getUser } from '../+state/auth.selectors';
import { User } from '../models';

@Injectable({
	providedIn: 'root'
})
export class UserService {
	constructor(private store: Store<any>) {}

	getUser(): Observable<User> {
		return this.store.pipe(select(getUser));
	}
}
