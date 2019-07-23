
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs';
// import { pipe } from 'rxjs/add/operators;
import { map } from 'rxjs/operators';
import { findReadVarNames } from '@angular/compiler/src/output/output_ast';
// import 'rxjs/add/operator/map';


@Injectable()
export class userService {

    constructor(private http: HttpClient, private _https : Http) { }

    get_user(page) {
        let headers = new Headers({ 'Authorization': 'JWT ' + localStorage.getItem('currentUser') });
    headers.append('Content-Type', 'application/json');
        return this._https.get('https://apis.rfpgurus.com/super/userDetailandfilter/'+ '?page=' + page,{headers:headers});
    }
    hamzasaeed() {
    //     let headers = new Headers({ 'Authorization': 'JWT ' + localStorage.getItem('currentUser') });
    // headers.append('Content-Type', 'application/json');
        return this.http.get('http://192.168.29.223:7000/payment/testreq/');
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
postdate(datefrom, dateto, fname, lname ,email) {
    if (localStorage.getItem('currentUser')) {
        const headers = new Headers({ 'Authorization': 'JWT ' + localStorage.getItem('currentUser') });
        headers.append('Content-Type', 'application/json');
        return this._https.post('http://192.168.29.234:8000/super/userDetailandfilter/',
        JSON.stringify({
            datefrom: datefrom,
            dateto : dateto,
            fname : fname,
            lname : lname,
            email : email


        }),{headers:headers})
        }
    }
postdatepayment(datefrom, dateto,page) {
    if (localStorage.getItem('currentUser')) {
        const headers = new Headers({ 'Authorization': 'JWT ' + localStorage.getItem('currentUser') });
        headers.append('Content-Type', 'application/json');
        return this._https.post('https://apis.rfpgurus.com/super/paymentDetailandfilter/' + '?page =' +page,
        JSON.stringify({
            datefrom: datefrom,
            dateto : dateto

        }),{headers:headers})
        }
    }
postdate2(datefrom, dateto, page) {
    if (localStorage.getItem('currentUser')) {
        const headers = new Headers({ 'Authorization': 'JWT ' + localStorage.getItem('currentUser') });
        headers.append('Content-Type', 'application/json');
        return this._https.post('https://apis.rfpgurus.com/super/alltikketadmin/' + '?page =' +page,
        JSON.stringify({
            datefrom: datefrom,
            dateto : dateto

        }),{headers:headers})
        }
    }
        // postprice(id,price) {
        //     // if (localStorage.getItem('currentUser')) {
        //       const headers = new Headers({ 'Authorization': 'JWT ' + localStorage.getItem('currentUser') });
        //       headers.append('Content-Type', 'application/json');
        //       return this._https.put('https://apis.rfpgurus.com/super/pakagepricesetupdate/'+id,
        //         JSON.stringify({
                 
      
        //         }),{headers:headers}).map((response: Response) => response.json());
        //       }
        //     // }

        postprice(id,price) {
                //mydate,updateddate,id,updatedtitle,updatedprofileurl,upactive,updatedprofile_logo,updatedrating_logo,updatedprice500kwh,updatedprice1000kwh,updatedprice2000kwh,updatedcancelation_fee,updatedfact_sheet,updatedterms_of_service,updatedphone,updatedsign_up,updatedproduct_name,updatedterms_month,updatedrenewable,updatedrate_type,updatedcustomer_type
                console.log(" service object",id,price)
                // const headers = new Headers();
                const headers = new Headers({ 'Authorization': 'JWT ' + localStorage.getItem('currentUser') });
                      headers.append('Content-Type', 'application/json');
            
                return this._https.put('http://192.168.18.40:8000/super/pakagepricesetupdate/'+ id +'/', JSON.stringify({
               
                    "price":price
                  // "check":false,
                  
                }), 
                {headers: headers}).map((response: Response) => response.json());
                }



    get_user_subscriber(page) {
        let headers = new Headers({ 'Authorization': 'JWT ' + localStorage.getItem('currentUser') });
    headers.append('Content-Type', 'application/json');
        return this._https.get('https://apis.rfpgurus.com/super/trialsubscriptionuser/'+ '?page=' + page,{headers:headers});
    }
    get_user_ticket(page) {
        let headers = new Headers({ 'Authorization': 'JWT ' + localStorage.getItem('currentUser') });
    headers.append('Content-Type', 'application/json');
        return this._https.get('https://apis.rfpgurus.com/super/alltikketadmin/'+ '?page=' + page,{headers:headers});
    }
    get_user_single(id) {
        let headers = new Headers({ 'Authorization': 'JWT ' + localStorage.getItem('currentUser') });
    headers.append('Content-Type', 'application/json');
        return this._https.get('https://apis.rfpgurus.com/super/singleuserdetail/'+id+'/',{headers:headers});
    }
    get_price_payment() {
        let headers = new Headers({ 'Authorization': 'JWT ' + localStorage.getItem('currentUser') });
    headers.append('Content-Type', 'application/json');
        return this._https.get('https://apis.rfpgurus.com/super/pakagepriceset/',{headers:headers});
    }
    get_price_img() {
        let headers = new Headers({ 'Authorization': 'JWT ' + localStorage.getItem('currentUser') });
    headers.append('Content-Type', 'application/json');
        return this._https.get('https://apis.rfpgurus.com/super/pricing_images/',{headers:headers});
    }
  
}
