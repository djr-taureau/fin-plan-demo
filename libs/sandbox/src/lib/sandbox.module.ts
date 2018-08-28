import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
	SandboxCoreModule,
	SandboxRoutingModule,
	SandboxUIModule
} from './+modules';
import { SandboxPageComponent } from './sandbox-page/sandbox-page.component';

@NgModule({
	imports: [
		CommonModule,
		SandboxCoreModule,
		SandboxRoutingModule,
		SandboxUIModule
	],
	declarations: [SandboxPageComponent]
})
export class SandboxModule {}
