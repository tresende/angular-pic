import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { loweCaseValidator } from 'src/app/shared/validators/lower-case.validator';
import { UserNotTakenValidatorService } from './user-not-take.validator.service';
import { NewUser } from './new-user';
import { SignupService } from './signup.service';
import { Router } from '@angular/router';
import { userNamePasswordValidator } from './username-password.validator';

@Component({
    templateUrl: './signup.component.html',
})
export class SignupComponent implements OnInit {

    signupForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private signupService: SignupService,
        private router: Router,
        // private userNotTakenValidatorService: UserNotTakenValidatorService
    ) { }

    ngOnInit(): void {
        this.signupForm = this.formBuilder.group({
            userName: ['',
                [
                    Validators.required,
                    Validators.minLength(2),
                    Validators.maxLength(30),
                    loweCaseValidator
                ],
                //this.userNotTakenValidatorService.checkUserNameTaken()
            ],
            fullName: ['',
                [
                    Validators.required,
                    Validators.minLength(2),
                    Validators.maxLength(40),
                ]
            ],
            email: ['',
                [
                    Validators.required,
                    Validators.email,
                ]
            ],
            password: ['',
                [
                    Validators.required,
                    Validators.minLength(8),
                    Validators.maxLength(14),
                ]
            ],
        }, {
                validator: userNamePasswordValidator
            });
    }

    signup() {

        if (this.signupForm.valid && !this.signupForm.pending) {
            const newUser = this.signupForm.getRawValue() as NewUser;
            this.signupService
                .signup(newUser)
                .subscribe(
                    () => this.router.navigate(['']),
                    err => console.log(err)
                );
        }
    }
}