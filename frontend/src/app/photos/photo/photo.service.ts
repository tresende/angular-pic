import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo } from './photo';

const API = 'http://localhost:3000';

@Injectable({ providedIn: 'root' })
export class PhotoService {
    constructor(private http: HttpClient) { }

    listFormUser(userName: string) {
        return this.http.get<Photo[]>('http://localhost:3000/' + userName + '/photos')
    }

    listFromUserPaginated(userName: string, page: number) {
        const params = new HttpParams()
            .append('page', page.toString());

        return this.http
            .get<Photo[]>(API + '/' + userName + '/photos', { params: params });
    }
}