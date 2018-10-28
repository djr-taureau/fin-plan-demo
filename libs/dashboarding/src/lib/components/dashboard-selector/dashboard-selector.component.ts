//todo: Make better
import { Component, OnInit, HostBinding } from '@angular/core';
import { RolesService, Roles } from '@lifeworks/services';
import { Observable } from 'rxjs';
import { UserService, User } from '@lifeworks/authentication';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
	selector: 'lw-dashboard-selector',
	templateUrl: './dashboard-selector.component.html',
	styleUrls: ['./dashboard-selector.component.scss']
})
export class DashboardSelectorComponent implements OnInit {
	user$: Observable<User>;
	roles$: Observable<Roles>;
	show$: Observable<boolean>;

	constructor(
		private rolesService: RolesService,
		private userService: UserService,
		private router: Router
	) {}

	ngOnInit() {
		this.user$ = this.userService.getUser();
		this.roles$ = this.rolesService.getRoles();
		this.show$ = this.user$.pipe(map(() => false));
	}

	changeDashboard(dashboard: string) {
		this.router.navigate([`dashboard/${dashboard}`]);
	}
}
