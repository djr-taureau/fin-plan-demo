import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthenticationModule } from '@lifeworks/authentication';


const MODULES = [NgCommonModule, HttpClientModule, ReactiveFormsModule, AuthenticationModule];

@NgModule({
	imports: [MODULES],
	exports: [MODULES]
})
export class PermissionsCoreModule {}
