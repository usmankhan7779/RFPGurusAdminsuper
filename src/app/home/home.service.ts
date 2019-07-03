import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, filter } from 'rxjs/operators';
import * as jwt_decode from "jwt-decode";
import { isPlatformBrowser } from '@angular/common';
import { Inject,  PLATFORM_ID } from '@angular/core';
// import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { Headers, Http, Response } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient, private http2 : Http, @Inject(PLATFORM_ID) private platformId: Object) { }
  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  time;
  exp_time;
  token;
  login(username: string, password: string) {
    return this.http.post('https://apis.rfpgurus.com/user-token-auth/',
      JSON.stringify({ username: username, password: password }), this.httpOptions)
      .pipe(tap(response => {
        let decodedToken = jwt_decode(response['token']);

        let user = { userid: decodedToken.user_id, username: decodedToken.username, token: response['token'] };
        if (user && user.token) {
          this.time = new Date()
          // this.exp_time = moment(this.time).add(1, 'days');
          localStorage.setItem('loged_in', '1');
          // localStorage.setItem('exp', this.exp_time);
          localStorage.setItem('currentUser', JSON.stringify(user.token));
        }
      }))
  }

  // login_authenticate(username) {
  //   return this.http.post('https://apis.rfpgurus.com/ac_login/', {
  //     'username': username
  //   }, this.httpOptions);
  // }


  checkrole() {
   
      const headers = new Headers({'Authorization': 'JWT ' + JSON.parse(localStorage.getItem('currentUser')).currentUser});
      headers.append('Content-Type', 'application/json');
      return this.http2.get('https://apis.rfpgurus.com/super/SuperAdminLoginStatus/', {headers: headers}  ).pipe(map((response: Response) => response.json()));
    
  
}
}
