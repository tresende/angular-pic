import { Component, OnDestroy, Output, EventEmitter, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
    selector: 'ap-search',
    templateUrl: './search.component.html'
})
export class SearchComponent implements OnDestroy {


    @Output() onTyping = new EventEmitter<string>();
    @Input() value: string = '';
    debounce: Subject<string> = new Subject<string>();

    ngOnDestroy(): void {
        this.debounce.unsubscribe();
    }

    ngOnInit(): void {
        this.debounce
            .pipe(debounceTime(300))
            .subscribe(filter => this.onTyping.emit(filter))
    }
}