import { AbstractControl } from '@angular/forms';

export function loweCaseValidator(control: AbstractControl) {
    console.log(control.value);
    if (control.value.trim() && !/^[a-z0-9_\-]+$/.test(control.value)) {
        return { lowercase: true }
    }
    return null;
}