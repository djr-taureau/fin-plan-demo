import { Component, OnInit } from '@angular/core';
import { UserService, User } from '@lifeworks/authentication';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { head } from 'ramda';

@Component({
	selector: 'lifeworks-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
	public user: Observable<User>;
	public role: Observable<string>;

	constructor(private userService: UserService) {}

	ngOnInit() {
		this.user = this.userService.getUser();
		this.role = this.user.pipe(map(u => head(u.roles)));
	}
}
