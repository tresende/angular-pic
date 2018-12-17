import { Component, Input } from '@angular/core';

@Component({
    templateUrl: './vmessage.component.html',
    selector: 'ap-vmessage'
})
export class VMessageComponent {
    @Input() text = '';

}