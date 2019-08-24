import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { userService } from './viewuser.service';
import { PagerService } from '../servicefile/paginator.service';
import { userService } from '../viewuser/viewuser.service';
import * as moment from 'moment';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl, FormGroupDirective, NgForm } from '@angular/forms';

@Component({
  selector: 'app-view-ticket-receive',
  templateUrl: './view-ticket-receive.component.html',
  styleUrls: ['./view-ticket-receive.component.scss']
})
export class ViewTicketReceiveComponent implements OnInit {
  // personal: any ;
  public personal;
  pager: any = {};
  pageSize = '10';
  date;
  constructor(private _nav: Router, private _serv: userService, private pagerService: PagerService, private formbuilders: FormBuilder) { }

  ngOnInit() {
    this.viewuser(1);
    this.date = this.formbuilders.group({
      datefrom: [''],
      dateto: [''],

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
  viewuser(page) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }
    // alert(page)
    this._serv.get_user_ticket(this.pageSize, page).subscribe(
      data => {
        this.personal = data.json();

        console.log(this.personal)
        this.pager = this.pagerService.getPager(this.personal['totalItems'], page, this.pageSize);
      });
  }
  postpage;
  postoffer2(page) {

    return this._serv.postdate2(moment(this.date.value['datefrom']).format('YYYY-MM-DD'), moment(this.date.value['dateto']).format('YYYY-MM-DD'), this.pager).subscribe(
      // moment(this.date.value['dateto']).format('YYYY-MM-DD'),
      data => {

        console.log(data)
        this.personal = data.json()
        console.log(this.postpage)
        this.pager = this.pagerService.getPager(this.personal['totalItems'], page, 10);
      })
  }

}

