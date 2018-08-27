import { NgModule } from '@angular/core';
import { SandboxPageComponent } from '../sandbox-page/sandbox-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
	imports: [
		RouterModule.forChild([{ path: '', component: SandboxPageComponent }])
	],
	exports: [RouterModule]
})
export class SandboxRoutingModule {}
