
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs';
// import { pipe } from 'rxjs/add/operators;
import { map } from 'rxjs/operators';
// import 'rxjs/add/operator/map';


@Injectable()
export class userService {

    constructor(private http: HttpClient, private _https : Http) { }

    get_user(page) {
        let headers = new Headers({ 'Authorization': 'JWT ' + localStorage.getItem('currentUser') });
    headers.append('Content-Type', 'application/json');
        return this._https.get('https://apis.rfpgurus.com/super/userDetailandfilter/'+ '?page=' + page,{headers:headers});
    }
    get_user_payment(page) {
        let headers = new Headers({ 'Authorization': 'JWT ' + localStorage.getItem('currentUser') });
    headers.append('Content-Type', 'application/json');
        return this._https.get('https://apis.rfpgurus.com/super/paymentDetailandfilter/'+ '?page=' + page,{headers:headers});
    }
    get_user_status() {
        let headers = new Headers({ 'Authorization': 'JWT ' + localStorage.getItem('currentUser') });
    headers.append('Content-Type', 'application/json');
        return this._https.get('https://apis.rfpgurus.com/super/maindashboard/',{headers:headers});
    }
    postdate(datefrom, dateto) {
        if (localStorage.getItem('currentUser')) {
          const headers = new Headers({ 'Authorization': 'JWT ' + localStorage.getItem('currentUser') });
          headers.append('Content-Type', 'application/json');
          return this._https.post('https://apis.rfpgurus.com/super/userDetailandfilter/',
            JSON.stringify({
              datefrom: datefrom,
              dateto : dateto
  
            }),{headers:headers})
          }
        }
    
    get_user_subscriber(page) {
        let headers = new Headers({ 'Authorization': 'JWT ' + localStorage.getItem('currentUser') });
    headers.append('Content-Type', 'application/json');
        return this._https.get('http://192.168.29.223:8000/super/trialsubscriptionuser/'+ '?page=' + page,{headers:headers});
    }
    get_user_ticket(page) {
        let headers = new Headers({ 'Authorization': 'JWT ' + localStorage.getItem('currentUser') });
    headers.append('Content-Type', 'application/json');
        return this._https.get('http://192.168.29.223:8000/super/alltikketadmin/'+ '?page=' + page,{headers:headers});
    }
    get_user_single() {
        let headers = new Headers({ 'Authorization': 'JWT ' + localStorage.getItem('currentUser') });
    headers.append('Content-Type', 'application/json');
        return this._https.get('http://192.168.29.223:8000/super/alltikketadmin/',{headers:headers});
    }
    // https://apis.rfpgurus.com/super/trialsubscriptionuser/
    // http://192.168.29.223:8000/super/alltikketadmin/
}
