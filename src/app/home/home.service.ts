import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders ,} from '@angular/common/http';
import { tap, filter } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
// import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';
import { Headers, Http, Response } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient, private _https: Http,
     @Inject(PLATFORM_ID) private platformId: Object) { }
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
        let decodedToken = response['token'];

    let user = { userid: decodedToken.user_id, username: decodedToken.username, token: response['token'] };
    if (user && user.token) {
      this.time = new Date()

      localStorage.setItem('loged_in', '1');

      localStorage.setItem('currentUser', user.token);
    }
  }))
  }

  checkrole() {

let headers = new Headers({ 'Authorization': 'JWT ' + localStorage.getItem('currentUser') });
headers.append('Content-Type', 'application/json');
return this._https.get('https://apis.rfpgurus.com/super/SuperAdminLoginStatus/', {headers :headers})
  }
    ////////////////compressing upload img////////////
//     PostImage(fileToUpload: FileList): Observable<boolean> {
//       console.log('I am in 1 Service');
//       const formData: FormData = new FormData();
//       console.log('File to upload in service is:', fileToUpload);
//       // for(let i=0; i<fileToUpload.length;i++) {
//         formData.append('image' , fileToUpload[0]);
//       // }
//       // formData.append('name', Course_name);
//       // formData.append('image', Course_image);
  
//   console.log('formData is:', formData);
//   // console.log( formData.append('name', Course_name))
//   // console.log(formData.append('image', Course_image))
  
//   return this.http.post('https://storage.rfpgurus.com/hamzatest.php', formData)
//     .map((d) => { return true; })
// ;
//     }
    // bidnotes(model, notes, flashcard, course, book) {

//   const headers = new Headers( );
//   headers.append('Content-Type', 'application/json');
//   return this.http.post(  'bid/notesbids',
//     JSON.stringify({
  
  
//     }),
//     { headers: headers }).map((response: Response) => response.json());
// }
postimg(freetrial ) {
  alert(freetrial);

  const headers = new Headers({ 'Authorization': 'JWT ' + localStorage.getItem('currentUser') });
        headers.append('Content-Type', 'application/json');
  
  return this._https.put('https://apis.rfpgurus.com/super/pricing_imagesupdate/', JSON.stringify({
 
      "freetrial":freetrial,
    
    
  }), 
  {headers: headers}).map((response: Response) => response.json());
  }
  postimgmonthly( monthly_plan) {
    // alert(freetrial);
  
    const headers = new Headers({ 'Authorization': 'JWT ' + localStorage.getItem('currentUser') });
          headers.append('Content-Type', 'application/json');

    return this._https.put('https://apis.rfpgurus.com/super/pricing_imagesupdate/', JSON.stringify({
   
        
        "monthly_plan" : monthly_plan,
     
      
    }), 
    {headers: headers}).map((response: Response) => response.json());
    }
  
    postimgyear( yearly_plan) {
      // alert(freetrial);
    
      const headers = new Headers({ 'Authorization': 'JWT ' + localStorage.getItem('currentUser') });
            headers.append('Content-Type', 'application/json');
  
      return this._https.put('https://apis.rfpgurus.com/super/pricing_imagesupdate/', JSON.stringify({
     
          
          "yearly_plan" : yearly_plan,
       
        
      }), 
      {headers: headers}).map((response: Response) => response.json());
      }
}