import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NxModule } from '@nrwl/nx';

import { AuthenticationModule } from '@lifeworks/authentication';
import { PermissionsModule } from '@lifeworks/permissions';


const MODULES = [NgCommonModule, HttpClientModule, ReactiveFormsModule, AuthenticationModule, PermissionsModule, NxModule];

@NgModule({
	imports: MODULES,
	exports: MODULES
})
export class ClientsCoreModule {}
