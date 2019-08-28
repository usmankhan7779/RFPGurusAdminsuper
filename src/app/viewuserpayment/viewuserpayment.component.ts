import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { userService } from './viewuser.service';
import { PagerService } from '../servicefile/paginator.service';
import { userService } from '../viewuser/viewuser.service';
import * as moment from 'moment';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl, FormGroupDirective, NgForm } from '@angular/forms';

@Component({
  selector: 'app-viewuserpayment',
  templateUrl: './viewuserpayment.component.html',
  styleUrls: ['./viewuserpayment.component.scss']
})
export class ViewuserpaymentComponent implements OnInit {
// personal: any ;
public personal;
pager: any = {};
 
model;
date;
item ;
pageSize = '10';
constructor(private _nav: Router, private formbuilders : FormBuilder , private _serv: userService,private pagerService: PagerService  ) { }

ngOnInit() {  
this.viewuser(1);
this.date = this.formbuilders.group({
  datefrom : [''],
  dateto : [''],
 
  })
}
 
 
page(pageSize) {
  // alert(pageSize)
  if (pageSize) {
    this.pageSize = pageSize;
    
      this.viewuser(1)
    // }
  }
  else {
    delete this.pageSize;
  }
}
 
viewuser(page){
  // alert(page)
  if (page < 1 || page > this.pager.totalPages) {
    return;
  }
  // alert(page)
  this._serv.get_user_payment(this.pageSize,page).subscribe(
    data => {
        this.personal = data.json();
 
        console.log(this.personal)
        this.pager = this.pagerService.getPager(this.personal['totalItems'], page, this.pageSize);

        // this.pager = this.pagerService.getPager(this.item, page, this.pageSize);
    });
}
sorting;
postpage:any;

postoffer(page) {
   
  return this._serv.postdatepayment(this.pageSize,this.date.value['datefrom'], this.date.value['dateto'],page ).subscribe(
   
    // moment(this.date.value['dateto']).format('YYYY-MM-DD'),
data => {
  console.log(moment(this.date.value['datefrom']).format('YYYY-MM-DD'),moment(this.date.value['dateto']).format('YYYY-MM-DD'))

  console.log(data)
  this.personal = data.json()
  // console.log(this.postpage)
  this.pager = this.pagerService.getPager(this.personal['totalItems'], page, this.pageSize);
})
}
postoffersort() {
   
  return this._serv.postdatepaymentmonthly( this.model.sorting ).subscribe(
    // moment(this.date.value['dateto']).format('YYYY-MM-DD'),
data => {

  console.log(data)
  this.personal = data.json()
  console.log(this.postpage)
  // this.pager = this.pagerService.getPager(this.personal['totalItems'], page, 10);
})
}
}

