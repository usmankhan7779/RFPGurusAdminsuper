
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';





@Injectable()
export class userService {

    constructor(private http: HttpClient, private _https: Http) { }

    get_user(id,page) {
        let headers = new Headers({ 'Authorization': 'JWT ' + localStorage.getItem('currentUser') });
        headers.append('Content-Type', 'application/json');
        return this._https.get('https://apis.rfpgurus.com/super/userDetailandfilter/'+id +'/' + '?page=' + page, { headers: headers });
    }

    get_user_payment(id,page) {
        let headers = new Headers({ 'Authorization': 'JWT ' + localStorage.getItem('currentUser') });
        headers.append('Content-Type', 'application/json');
        return this._https.get('https://apis.rfpgurus.com/super/paymentDetailandfilter/'+id +'/' + '?page=' + page, { headers: headers });
    }
    postdesc(des, id) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'JWT ' + localStorage.getItem('currentUser'));
        // https://apis.rfpgurus.com/ticket/Ticketreply_admin/31/
        return this._https.post("https://apis.rfpgurus.com/ticket/Ticketreply_admin/" + id + '/',
            JSON.stringify({

                "description": des,
            }), { headers: headers }).map((res: Response) => res.json())
    }
    get_user_status() {
        let headers = new Headers({ 'Authorization': 'JWT ' + localStorage.getItem('currentUser') });
        headers.append('Content-Type', 'application/json');
        return this._https.get('https://apis.rfpgurus.com/super/maindashboard/', { headers: headers });
    }



    // trialsubscriptionuser
    posttrialSubScriptionuer(item,datefrom, dateto, fname, lname, email,page) {
        if (localStorage.getItem('currentUser')) {
            const headers = new Headers({ 'Authorization': 'JWT ' + localStorage.getItem('currentUser') });
            headers.append('Content-Type', 'application/json');
            return this._https.post('https://apis.rfpgurus.com/super/trialsubscriptionuser/' + item + '/'+ '?page ='+ page,
                JSON.stringify({
                    'datefrom': datefrom,
                    'dateto': dateto,
                    'fname': fname,
                    'lname': lname,
                    'email': email


                }), { headers: headers })
        }
    }
    // return this._https.get('https://apis.rfpgurus.com/super/allpending_agencypost/' + id + '/'+ '?page=' + page, { headers: headers }).map((response: Response) => (response.json()));
// 


postnewrfpfilter(item,datefrom, dateto,agency, status ,page) {
    if (localStorage.getItem('currentUser')) {
        const headers = new Headers({ 'Authorization': 'JWT ' + localStorage.getItem('currentUser') });
        headers.append('Content-Type', 'application/json');
        return this._https.post('https://apis.rfpgurus.com/super/allpending_agencypost/' + item + '/'+ '?page =' + page,
            JSON.stringify({
                'datefrom': datefrom,
                'dateto': dateto,
                'agency': agency,
                'status': status,


            }), { headers: headers })
    }
}

promocode_get_post(item,datefrom, dateto, code, active,subscription,page) {
    if (localStorage.getItem('currentUser')) {
        const headers = new Headers({ 'Authorization': 'JWT ' + localStorage.getItem('currentUser') });
        headers.append('Content-Type', 'application/json');
        return this._https.post('https://apis.rfpgurus.com/super/promocode_get_post/' + item + '/'+ '?page=' + page,
            JSON.stringify({
                'datefrom': datefrom,
                'dateto': dateto,
                'code': code,
                'active': active,
                'subscription':subscription
                 


            }), { headers: headers })
    }
}
postupdaterfpfilter(item,datefrom, dateto, agency, status,page) {
    if (localStorage.getItem('currentUser')) {
        const headers = new Headers({ 'Authorization': 'JWT ' + localStorage.getItem('currentUser') });
        headers.append('Content-Type', 'application/json');
        return this._https.post('https://apis.rfpgurus.com/super/allpending_agencyupdate/' + item + '/'+ '?page=' + page,
            JSON.stringify({
                'datefrom': datefrom,
                'dateto': dateto,
                'agency': agency,
                'status': status,
                 


            }), { headers: headers })
    }
}
    postdate(item,datefrom, dateto, fname, lname, email,page) {
        if (localStorage.getItem('currentUser')) {
            const headers = new Headers({ 'Authorization': 'JWT ' + localStorage.getItem('currentUser') });
            headers.append('Content-Type', 'application/json');
            return this._https.post('https://apis.rfpgurus.com/super/userDetailandfilter/' + item + '/'+ '?page =' + page,
                JSON.stringify({
                    datefrom: datefrom,
                    dateto: dateto,
                    fname: fname,
                    lname: lname,
                    email: email


                }), { headers: headers })
        }
    }
    postdatepayment(item,publishdate, dateto, page) {
        if (localStorage.getItem('currentUser')) {
            const headers = new Headers({ 'Authorization': 'JWT ' + localStorage.getItem('currentUser') });
            headers.append('Content-Type', 'application/json');
            return this._https.post('https://apis.rfpgurus.com/super/paymentDetailandfilter/'+ item + '/' + '?page =' + page,
                JSON.stringify({
                    datefrom: publishdate,
                    dateto: dateto

                }), { headers: headers })
        }
    }
    postdatepaymentmonthly(sort) {
        if (localStorage.getItem('currentUser')) {
            const headers = new Headers({ 'Authorization': 'JWT ' + localStorage.getItem('currentUser') });
            headers.append('Content-Type', 'application/json');
            return this._https.post('https://apis.rfpgurus.com/super/paymentDetailandfilter/',
                JSON.stringify({
                    sort: sort,


                }), { headers: headers })
        }
    }
    postdate2(item,datefrom, dateto, page) {
        if (localStorage.getItem('currentUser')) {
            const headers = new Headers({ 'Authorization': 'JWT ' + localStorage.getItem('currentUser') });
            headers.append('Content-Type', 'application/json');
            return this._https.post('https://apis.rfpgurus.com/super/alltikketadmin/'+ item + '/'  + '?page =' + page,
                JSON.stringify({
                    datefrom: datefrom,
                    dateto: dateto

                }), { headers: headers })
        }
    }
    eachview(id) {
        if (localStorage.getItem('currentUser')) {
            // alert(JSON.parse(localStorage.getItem('currentUser')).token)
            let headers = new Headers();

            headers.append('Authorization', 'JWT ' + localStorage.getItem('currentUser'));
            headers.append('Content-Type', 'application/json');
            return this._https.get('https://apis.rfpgurus.com/ticket/Ticketreply_admin/' + id + '/', { headers: headers }).map((response: Response) => response.json());
        }
    }
    promocode_update(id, datefrom, dateto, discount, valid) {
        if (localStorage.getItem('currentUser') != null) {
            const headers = new Headers({ 'Authorization': 'JWT ' + localStorage.getItem('currentUser') });
            headers.append('Content-Type', 'application/json');
            return this._https.put('https://apis.rfpgurus.com/super/promocode_update/' + id + '/',
                JSON.stringify({
                    "validfrom": datefrom,
                    "validto": dateto,
                    "discount": discount,
                    "status": valid,



                }), { headers: headers })
        }
    }
    promocode_add(datefrom, dateto, discount, status, code, subscription_type, promo_type) {
        if (localStorage.getItem('currentUser') != null) {
            const headers = new Headers({ 'Authorization': 'JWT ' + localStorage.getItem('currentUser') });
            headers.append('Content-Type', 'application/json');
            return this._https.post('https://apis.rfpgurus.com/super/promocode_add/',
                JSON.stringify({
                    "validfrom": datefrom,
                    "validto": dateto,
                    "discount": discount,
                    "status": status,
                    "code": code,
                    "subscription_type": subscription_type,
                    "promo_type": promo_type

                    //                     validfrom
                    // validto
                    // discount
                    // status
                    // code
                    // subscription_type .......A for agency ,.... V for vendor
                    // promo_type    T for Trial .... M for Monthly .... Y yearly



                }), { headers: headers })
        }
    }


    postprice(id, price) {
        //mydate,updateddate,id,updatedtitle,updatedprofileurl,upactive,updatedprofile_logo,updatedrating_logo,updatedprice500kwh,updatedprice1000kwh,updatedprice2000kwh,updatedcancelation_fee,updatedfact_sheet,updatedterms_of_service,updatedphone,updatedsign_up,updatedproduct_name,updatedterms_month,updatedrenewable,updatedrate_type,updatedcustomer_type
        console.log(" service object", id, price)
        // const headers = new Headers();
        const headers = new Headers({ 'Authorization': 'JWT ' + localStorage.getItem('currentUser') });
        headers.append('Content-Type', 'application/json');

        return this._https.put('https://apis.rfpgurus.com/super/pakagepricesetupdate/' + id + '/', JSON.stringify({

            "price": price
            // "check":false,

        }),
            { headers: headers }).map((response: Response) => response.json());
    }
    delpromo(id) {
        //mydate,updateddate,id,updatedtitle,updatedprofileurl,upactive,updatedprofile_logo,updatedrating_logo,updatedprice500kwh,updatedprice1000kwh,updatedprice2000kwh,updatedcancelation_fee,updatedfact_sheet,updatedterms_of_service,updatedphone,updatedsign_up,updatedproduct_name,updatedterms_month,updatedrenewable,updatedrate_type,updatedcustomer_type
        console.log(" service object", id)
        // const headers = new Headers();
        const headers = new Headers({ 'Authorization': 'JWT ' + localStorage.getItem('currentUser') });
        headers.append('Content-Type', 'application/json');

        return this._https.delete('https://apis.rfpgurus.com/super/promocode_update/' + id + '/',
            { headers: headers }).map((response: Response) => response.json());
    }



    get_user_subscriber(id,page) {
        let headers = new Headers({ 'Authorization': 'JWT ' + localStorage.getItem('currentUser') });
        headers.append('Content-Type', 'application/json');
        return this._https.get('https://apis.rfpgurus.com/super/trialsubscriptionuser/'+id +'/' + '?page=' + page, { headers: headers });
    }
    get_user_ticket(id,page) {
        let headers = new Headers({ 'Authorization': 'JWT ' + localStorage.getItem('currentUser') });
        headers.append('Content-Type', 'application/json');
        return this._https.get('https://apis.rfpgurus.com/super/alltikketadmin/' +id +'/'+ '?page=' + page, { headers: headers });
    }
    get_user_single(id) {
        let headers = new Headers({ 'Authorization': 'JWT ' + localStorage.getItem('currentUser') });
        headers.append('Content-Type', 'application/json');
        return this._https.get('https://apis.rfpgurus.com/super/singleuserdetail/' + id + '/', { headers: headers });
    }
    get_user_single_payment(id) {
        let headers = new Headers({ 'Authorization': 'JWT ' + localStorage.getItem('currentUser') });
        headers.append('Content-Type', 'application/json');
        return this._https.get('https://apis.rfpgurus.com/super/paymentsingleDetail/' + id + '/', { headers: headers }).map((response: Response) => response.json());
    }

 
    get_price_payment() {
        let headers = new Headers({ 'Authorization': 'JWT ' + localStorage.getItem('currentUser') });
        headers.append('Content-Type', 'application/json');
        return this._https.get('https://apis.rfpgurus.com/super/pakagepriceset/', { headers: headers });
    }
    get_promo(id,page) {
        let headers = new Headers({ 'Authorization': 'JWT ' + localStorage.getItem('currentUser') });
        headers.append('Content-Type', 'application/json');
        return this._https.get('https://apis.rfpgurus.com/super/promocode_get_post/' + id + '/'+ '?page=' + page, { headers: headers }).map((response: Response) => (response.json()));
    }
    get_newrfp(id,page) {
        let headers = new Headers({ 'Authorization': 'JWT ' + localStorage.getItem('currentUser') });
        headers.append('Content-Type', 'application/json');
        return this._https.get('https://apis.rfpgurus.com/super/allpending_agencypost/' + id + '/'+ '?page=' + page, { headers: headers }).map((response: Response) => (response.json()));
    }
    Approvenewrfp(id) {
        // let headers = new Headers({ 'Authorization': 'JWT ' + localStorage.getItem('currentUser') });
        // headers.append('Content-Type', 'application/json');
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        // headers.append('Authorization', 'Token ' +  this.authentication);
        headers.append('Authorization', 'JWT ' + localStorage.getItem('currentUser'));
        return this._https.get('https://apis.rfpgurus.com/super/newrfp_aprove/' + id + '/', { headers: headers }).map((response: Response) => response.json());
    }
    Approveudpaterfp(id) {
        // let headers = new Headers({ 'Authorization': 'JWT ' + localStorage.getItem('currentUser') });
        // headers.append('Content-Type', 'application/json');
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        // headers.append('Authorization', 'Token ' +  this.authentication);
        headers.append('Authorization', 'JWT ' + localStorage.getItem('currentUser'));
        return this._https.get('https://apis.rfpgurus.com/super/updaterfp_aprove/' + id + '/', { headers: headers }).map((response: Response) => response.json());
    }
    get_newrfp_details(id) {
        let headers = new Headers({ 'Authorization': 'JWT ' + localStorage.getItem('currentUser') });
        headers.append('Content-Type', 'application/json');
        return this._https.get('https://apis.rfpgurus.com/super/allpending_agency_detail/' + id + '/', { headers: headers }).map((response: Response) => (response.json()));
    }
   
    get_updaterfp(id,page) {
        let headers = new Headers({ 'Authorization': 'JWT ' + localStorage.getItem('currentUser') });
        headers.append('Content-Type', 'application/json');
        return this._https.get('https://apis.rfpgurus.com/super/allpending_agencyupdate/'+ id + '/' + '?page=' + page, { headers: headers }).map((response: Response) => (response.json()));
    }
    get_price_img() {
        let headers = new Headers({ 'Authorization': 'JWT ' + localStorage.getItem('currentUser') });
        headers.append('Content-Type', 'application/json');
        return this._https.get('https://apis.rfpgurus.com/super/pricing_images/', { headers: headers });
    }

}
