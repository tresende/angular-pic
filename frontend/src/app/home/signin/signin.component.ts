import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    templateUrl: './signin.component.html',
})
export class SigninComponent implements OnInit {
    loginForm: FormGroup;

    constructor(private formBuider: FormBuilder) { }

    ngOnInit(): void {
        this.loginForm = this.formBuider.group({
            userName: ['', Validators.required ],
            password: ['', Validators.required ]
        });
    }
}