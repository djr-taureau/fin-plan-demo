import { NgModule } from '@angular/core';

import {
	SandboxCoreModule,
	SandboxRoutingModule,
	SandboxUIModule
} from './+modules';
import { SandboxPageComponent } from './sandbox-page/sandbox-page.component';

@NgModule({
	imports: [SandboxCoreModule, SandboxRoutingModule, SandboxUIModule],
	declarations: [SandboxPageComponent]
})
export class SandboxModule {}
