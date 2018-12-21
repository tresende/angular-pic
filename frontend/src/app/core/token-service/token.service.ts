import { Injectable } from '@angular/core';

const key = 'auth-token';

@Injectable({ providedIn: 'root' })
export class TokenService {

    hasToken(): boolean {
        return !!this.getToken();
    }

    setToken(token) {
        localStorage.setItem(key, token);
    }

    getToken(): string {
        return localStorage.getItem(key);
    }

    removeToken() {
        localStorage.removeItem(key);
    }
}