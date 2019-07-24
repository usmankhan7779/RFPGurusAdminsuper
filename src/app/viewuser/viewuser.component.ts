import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userService } from './viewuser.service';
import { PagerService } from '../servicefile/paginator.service';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl, FormGroupDirective, NgForm } from '@angular/forms';
import * as moment from 'moment';
@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.scss']
})



export class ViewuserComponent implements OnInit {
  // personal: any ;
  personal :any;
  pager: any = {};
  pageSize = '10';
  pagers;
  pagersss;
  date;

  constructor(private _nav: Router, private _serv: userService,private pagerService: PagerService,private formbuilders : FormBuilder  ) { }

  ngOnInit() {  
 this.viewuser(1)
//  this.date = this.formbuilders.group({
//   datefrom : [''],
//   dateto : [''],
//   fname :[''],
//   lname : [''],
//   email : ['']
 
//   })
  }
  viewuser(page){
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }
    
    this._serv.get_user(page).subscribe(
      data => {
          this.personal = data.json();
          this.pagers = data['totalItems']

   
          console.log(this.personal)
          this.pager = this.pagerService.getPager(this.personal['totalItems'], page, 10);
      });
  }
  datefrom;
  model : any = {}
  postpage:any;
  dateto;
  
  postoffer(page) {
    let datefrom = moment(new Date, "YYYY-MM-DD");
    let dateto = moment(new Date, "YYYY-MM-DD");
    return this._serv.postdate(this.datefrom, this.dateto, this.model.fname , this.model.lname , this.model.eamil
     ).subscribe(
      // moment(this.date.value['dateto']).format('YYYY-MM-DD'),
  data => {

    console.log(data)
    this.personal = data.json()
    console.log(this.postpage)
    this.pager = this.pagerService.getPager(this.personal['totalItems'], page, 10);
  })
  }
}

