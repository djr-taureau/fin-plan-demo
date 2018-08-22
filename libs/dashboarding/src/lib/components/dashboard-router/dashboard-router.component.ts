import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { head } from 'ramda';
import { UserService, User } from '@lifeworks/authentication';

@Component({
	selector: 'lw-dashboard-router',
	templateUrl: './dashboard-router.component.html',
	styleUrls: ['./dashboard-router.component.scss']
})
export class DashboardRouterComponent implements OnInit {
	public user: Observable<User>;
	public role: Observable<string>;

	constructor(private userService: UserService) {}

	ngOnInit() {
		this.user = this.userService.getUser();
		this.role = this.user.pipe(map(u => head(u.roles)));
	}
}
