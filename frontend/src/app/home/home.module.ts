import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './signin/signin.component';
import { BrowserModule } from '@angular/platform-browser';
import { VMessageModule } from '../shared/components/vmessage/vmessage.module';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        ReactiveFormsModule,
        VMessageModule
    ],
    declarations: [SigninComponent],
})
export class HomeModule {

}