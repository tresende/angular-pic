import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PhotoDetailsComponent } from './photo-details.component';
import { PhotoModule } from '../photo/photo.module';
import { PhotoCommentsComponent } from './photo-comments/photo-comments.component';
import { VMessageModule } from 'src/app/shared/components/vmessage/vmessage.module';

@NgModule({
    declarations: [
        PhotoDetailsComponent,
        PhotoCommentsComponent
    ],
    exports: [
        PhotoDetailsComponent,
        PhotoCommentsComponent],
    imports: [
        CommonModule,
        PhotoModule,
        RouterModule,
        ReactiveFormsModule,
        VMessageModule
    ],
})
export class PhotoDetailsModule { }