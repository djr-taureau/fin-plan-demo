import { Component } from '@angular/core';

@Component({
	selector: 'lifeworks-accounts',
	templateUrl: './accounts.component.html',
	styleUrls: ['./accounts.component.scss']
})
export class AccountsPageComponent {}

@Component({
	template: `<h1>Account Firms Page<h1>`
})
export class AccountsFirmPageComponent {}

@Component({
	template: `<h1>Account Users Page<h1>`
})
export class AccountsUsersPageComponent {}

@Component({
	template: `<h1>Account Billing<h1>`
})
export class AccountsBillingPageComponent {}

@Component({
	template: `<h1>Accounts Header</h1>`
})
export class AccountsHeaderComponent {}

@Component({
	template: `<lw-page-navigation></lw-page-navigation>`
})
export class AccountsMenuComponent {}
