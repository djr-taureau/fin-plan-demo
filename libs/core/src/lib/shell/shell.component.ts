import { Component, OnInit } from '@angular/core';
import { AuthService } from '@lifeworks/authentication';

@Component({
	selector: 'lw-shell',
	templateUrl: './shell.component.html',
	styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
	constructor(private auth: AuthService) {}

	ngOnInit() {}

	logout() {
		this.auth.logout();
	}
}
