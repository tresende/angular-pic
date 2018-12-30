import { NgModule } from '@angular/core';
import { PhotoDetailsComponent } from './photo-details.component';
import { CommonModule } from '@angular/common';
import { PhotoModule } from '../photo/photo.module';

@NgModule({
    declarations: [PhotoDetailsComponent],
    imports: [CommonModule, PhotoModule],
    exports: [PhotoDetailsComponent]
})
export class PhotoDetailsModule {

}