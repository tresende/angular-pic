import { Component, Input } from '@angular/core';
import { environment } from '../../../environments/environment';

const CLOUD = environment.apiUrl + '/imgs/';

@Component({
    selector: 'ap-photo',
    templateUrl: 'photo.component.html'
})
export class PhotoComponent {

    private _url: string = '';

    @Input() description = '';
    @Input() set url(url: string) {
        if(url && url.startsWith('data')) {
            this._url = url;
        } else {
            this._url = CLOUD + url;
        }
    }

    get url() {
        return this._url
    }
}