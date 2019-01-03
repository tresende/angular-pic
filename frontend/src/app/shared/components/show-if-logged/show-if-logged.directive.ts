import { Directive, ElementRef, Renderer, OnInit } from '@angular/core';
import { UserService } from '../../../core/user/user.service'

@Directive({
    selector: '[showIfLogged]',
})
export class ShowIfLoggedDirective implements OnInit {

    constructor(
        private element: ElementRef<any>,
        private render: Renderer,
        private userService: UserService
    ) { }

    ngOnInit(): void {
        const element = this.element.nativeElement;
        !this.userService.isLogged() && this.render.setElementStyle(element, 'display', 'none')
    }
}