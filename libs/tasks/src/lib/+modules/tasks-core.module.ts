import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

const MODULES = [NgCommonModule, HttpClientModule];

@NgModule({
	imports: [MODULES],
	exports: [MODULES]
})
export class TasksCoreModule {}
