
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Headers, Response } from '@angular/http';


@Injectable()
export class userService {

    constructor(private http: HttpClient, private _https : Http) { }

    get_user(page) {
        return this.http.get('https://apis.rfpgurus.com/super/userDetailandfilter/'+ '?page=' + page);
    }
}
