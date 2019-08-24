import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { userService } from './viewuser.service';
import { PagerService } from '../servicefile/paginator.service';
import { userService } from '../viewuser/viewuser.service';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl, FormGroupDirective, NgForm } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-view-subscribe-user',
  templateUrl: './view-subscribe-user.component.html',
  styleUrls: ['./view-subscribe-user.component.scss']
})



export class ViewSubscribeUserComponent implements OnInit {
// personal: any ;
personal :any;
pager: any = {};
pageSize = '10';
pagers;
date;
selected;
constructor(private _nav: Router,private formbuilders : FormBuilder, private _serv: userService,private pagerService: PagerService  ) { }

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
  if (page < 1 || page > this.pager.totalPages) {
    return;
  }
  // alert(page)
  this._serv.get_user_subscriber(this.pageSize,page).subscribe(
    data => {
        this.personal = data.json();
        this.pagers = data['totalItems']

//  console.log(this.pagers.json())
        console.log(this.personal)
        this.pager = this.pagerService.getPager(this.personal['totalItems'], page, this.pageSize);
    });
}
model : any = {};
postpage;
lname;
email;
postoffer(page) {
   
  return this._serv.postdate(this.model.datefrom,this.model.dateto, this.model.fname , this.model.lname , this.model.email ).subscribe(
    // moment(this.date.value['dateto']).format('YYYY-MM-DD'),
data => {

  console.log(data)
  this.personal = data.json()
  console.log(this.personal)
  this.pager = this.pagerService.getPager(this.personal['totalItems'], page, 10);
})
}
}

