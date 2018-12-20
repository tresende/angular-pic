import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth.service';

@Component({
    templateUrl: './signin.component.html',
})
export class SigninComponent implements OnInit {
    loginForm: FormGroup;

    constructor(
        private formBuider: FormBuilder,
        private authService: AuthService
    ) { }

    ngOnInit(): void {
        this.loginForm = this.formBuider.group({
            userName: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    login() {
        const userName = this.loginForm.get('userName').value;
        const password = this.loginForm.get('password').value;
        this.authService
            .authenticate(userName, password)
            .subscribe(() => console.log('ok!'), (err) => {
                console.log(err);
                this.loginForm.reset();
            });
    }
}