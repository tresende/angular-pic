import { NgModule } from '@angular/core';
import { PhotoDetailsComponent } from './photo-details.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [PhotoDetailsComponent],
    imports: [CommonModule],
    exports: [PhotoDetailsComponent]
})
export class PhotoDetailsModule {

}