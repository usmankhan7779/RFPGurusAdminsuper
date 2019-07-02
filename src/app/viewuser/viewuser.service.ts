
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Headers, Response } from '@angular/http';


@Injectable()
export class userService {

    constructor(private http: HttpClient, private _https : Http) { }

    get_user(page) {
        return this.http.get('https://apis.rfpgurus.com/super/userDetailandfilter/'+ '?page=' + page);
    }
    get_user_payment(page) {
        return this.http.get('https://apis.rfpgurus.com/super/paymentDetailandfilter/'+ '?page=' + page);
    }
    get_user_status() {
        return this.http.get('http://192.168.29.223:8000/super/maindashboard/');
    }
    
}
