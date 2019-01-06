import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServerLog } from './server-log';
import { environment } from 'src/environments/environment.prod';

const API = environment.serverLog

@Injectable({
    providedIn: 'root'
})
export class ServerLogService {

    constructor(private httpClient: HttpClient) { }

    log(log: ServerLog) {
        return this.httpClient.post(API + 'infra/log', log);
    }
}