import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userService } from './viewuser.service';
import { PagerService } from '../servicefile/paginator.service';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl, FormGroupDirective, NgForm } from '@angular/forms';
import * as moment from 'moment';
import { FixedSizeVirtualScrollStrategy } from '@angular/cdk/scrolling';
import { MatDatepickerInputEvent } from '@angular/material/datepicker/typings/datepicker-input';
declare var $: any; 
 
 
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
  events: string[] = [];

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
  }
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
    
    this._serv.get_user(this.pageSize,page).subscribe(
      data => {
          this.personal = data.json();
          this.pagers = data['totalItems']

   
          console.log(this.personal)
          this.pager = this.pagerService.getPager(this.personal['totalItems'], page, this.pageSize);
      });
  }
  datefrom;
  model : any = {}
  postpage:any;
  dateto;
  
  postoffer(page) {
    alert(this.model.datefrom)
  
    return this._serv.postdate(this.pageSize, this.model.datefrom, this.model.dateto, this.model.fname , this.model.lname , this.model.email,page ).subscribe(
      // moment(this.date.value['dateto']).format('YYYY-MM-DD'),
  data => {
    // moment(this.date.value['datefrom']).format('YYYY-MM-DD'),
    
    console.log(data)
    this.personal = data.json()
    console.log(this.postpage)
    this.pager = this.pagerService.getPager(this.personal['totalItems'], page, this.pageSize);
  })
  }
}

