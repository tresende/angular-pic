import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo } from './photo';

@Injectable({ providedIn: 'root' })
export class PhotoService {
    constructor(private http: HttpClient) { }

    listFormUser(userName: string) {
        return this.http.get<Photo[]>('http://localhost:3000/' + userName + '/photos')
    }
}