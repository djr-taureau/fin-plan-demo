import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigService } from '../config';
import { ConfigServiceMock } from './core-services.mock';

@NgModule({
	imports: [CommonModule],
	providers: [{ provide: ConfigService, useValue: ConfigServiceMock }]
})
export class CoreTestingModule {}
