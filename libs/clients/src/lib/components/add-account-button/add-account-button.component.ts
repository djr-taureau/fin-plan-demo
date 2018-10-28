import { Component } from '@angular/core';

@Component({
	selector: 'lw-add-account-button',
	templateUrl: './add-account-button.component.html',
	styleUrls: ['./add-account-button.component.scss']
})
export class AddAccountButtonComponent {
	actions = [{
		display: 'Link an Account',
		value: { type: 'linkAccount' }
	}, {
		display: 'Create Account',
		value: { type: 'createAccount' }
	}]
	
}
