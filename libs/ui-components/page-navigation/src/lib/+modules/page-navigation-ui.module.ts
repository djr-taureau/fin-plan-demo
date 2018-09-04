import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material';

const MODULES = [MatTabsModule];

@NgModule({
	imports: [MODULES],
	exports: [MODULES]
})
export class PageNavigationUIModule {}
