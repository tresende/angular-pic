import { Injectable } from '@angular/core';
import { TokenService } from '../token-service/token.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { User } from './user';
import * as jwt_decode from 'jwt-decode'

@Injectable({ providedIn: 'root' })
export class UserService {

    private userSubject = new BehaviorSubject<User>(null);
    private userName: string;

    constructor(private tokenService: TokenService) {
        this.decodeAndNotify &&
            this.decodeAndNotify();
    }

    setToken(token: string) {
        this.tokenService.setToken(token);

        this.decodeAndNotify();
    }

    getUser(): Observable<User> {
        return this.userSubject.asObservable();
    }

    logout() {
        this.tokenService.removeToken();
        this.userSubject.next(null);
    }

    isLogged() {
        return this.tokenService.hasToken();
    }

    getUserName() {
        return this.userName;
    }

    private decodeAndNotify() {
        const token = this.tokenService.getToken();
        if (token) {
            const user = jwt_decode(token) as User;
            this.userName = user.name;
            this.userSubject.next(user);
        }
    }
}