import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import * as stacktrace from 'stacktrace-js';

import { UserService } from 'src/app/core/user/user.service';
import { ServerLogService } from './server-log-service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

    constructor(private injector: Injector) { }

    handleError(error: any): void {
        const location = this.injector.get(LocationStrategy);
        const userService = this.injector.get(UserService);
        const serverLogService = this.injector.get(ServerLogService);
        const router = this.injector.get(Router);

        const url = location instanceof PathLocationStrategy ? location.path() : '';
        const message = error.message ? error.message : error.toString();
        router.navigate(['error'])
        stacktrace
            .fromError(error)
            .then(stackframes => {
                const stackAsString = stackframes
                    .map(sf => sf.toString())
                    .join('\n');
                console.log(message);
                console.log(stackAsString);
                serverLogService.log({
                    message,
                    userName: userService.getUserName(),
                    url,
                    stack: stackAsString
                }).subscribe(() => console.log('Logged'))
            });
    }
}