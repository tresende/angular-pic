import { NgModule } from '@angular/core';

import { VMessageComponent } from './vmessage.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [VMessageComponent],
    imports: [CommonModule, ReactiveFormsModule],
    exports: [VMessageComponent]

})
export class VMessageModule {

}