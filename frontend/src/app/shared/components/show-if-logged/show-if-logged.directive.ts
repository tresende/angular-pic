import { Directive, ElementRef, Renderer, OnInit } from '@angular/core';
import { UserService } from '../../../core/user/user.service'

@Directive({
    selector: '[showIfLogged]',
})
export class ShowIfLoggedDirective implements OnInit {

    currentDisplay: string;

    constructor(
        private element: ElementRef<any>,
        private render: Renderer,
        private userService: UserService
    ) { }

    ngOnInit(): void {
        const el = this.element.nativeElement;
        this.currentDisplay = getComputedStyle(el).display;
        this.userService.getUser()
            .subscribe(user => {
                if (user) {
                    this.render.setElementStyle(el, 'display', this.currentDisplay);
                } else {
                    this.render.setElementStyle(el, 'display', 'none')
                }
            });
    }
}