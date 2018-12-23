import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { loweCaseValidator } from 'src/app/shared/validators/lower-case.validator';

@Component({
    templateUrl: './signup.component.html',
})
export class SignupComponent implements OnInit {

    signupForm: FormGroup;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit(): void {
        this.signupForm = this.formBuilder.group({
            userName: ['',
                [
                    Validators.required,
                    Validators.minLength(2),
                    Validators.maxLength(30),
                    loweCaseValidator
                ],
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
        });
    }
}