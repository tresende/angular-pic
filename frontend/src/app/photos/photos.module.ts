import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { PhotoModule } from './photo/photo.module';
import { PhotoFormModule } from './photo-form/photo-form.module';
import { PhotoListModule } from './photo-list/photo-list.module';
import { DarkenOnHoverModule } from '../shared/directives/darken-on-hover/darken-on-hover.module';

@NgModule({
    imports: [
        PhotoModule,
        PhotoFormModule,
        PhotoListModule,
        HttpClientModule,
        DarkenOnHoverModule,
        CommonModule
    ],
    exports: []
})
export class PhotosModule { }