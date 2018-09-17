import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { MatDialogRef } from '@angular/material';


import { InputOption } from '@lifeworks/common';
import { Permissions } from '../../services';
import { PermissionItem } from '../../models';

@Component({
	selector: 'lw-create-permission-page',
	templateUrl: './create-permission-page.component.html',
	styleUrls: ['./create-permission-page.component.scss']
})
export class CreatePermissionPageComponent {
	scopes$: Observable<InputOption[]>;
	form: FormGroup;

	constructor(
		public dialogRef: MatDialogRef<CreatePermissionPageComponent>,
		private permissions: Permissions
	) {
		this.scopes$ = this.permissions.getPermissionScopes();
		this.createForm();
	}

	createForm() {
		this.form = new FormGroup({
			name: new FormControl(''),
			description: new FormControl(''),
			scope: new FormControl(0),
		});
	}

	save(form: PermissionItem) {
		this.permissions.createPermission(form);
		this.dialogRef.close();
	}
}
