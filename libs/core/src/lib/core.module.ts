import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NiceDatePipe } from './date';
@NgModule({
    imports: [CommonModule],
    declarations: [NiceDatePipe],
    exports: [ NiceDatePipe ]
})
export class CoreModule {}
