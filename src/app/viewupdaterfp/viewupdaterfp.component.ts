import { Component, OnInit } from '@angular/core';
import { userService } from '../viewuser/viewuser.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import * as moment from 'moment';
import { PagerService } from '../servicefile/paginator.service';

@Component({
  selector: 'app-viewupdaterfp',
  templateUrl: './viewupdaterfp.component.html',
  styleUrls: ['./viewupdaterfp.component.css']
})
export class ViewupdaterfpComponent implements OnInit {
  personal :any;
  myPicker1;
  discount;
  dateto;
  datefrom;
  valid;
  viewuser;
  pager: any = {};
  pageSize = '10';
  pagers;
  pagersss;
  constructor(private _nav: Router,private pagerService: PagerService, private _serv: userService) { }

  ngOnInit() {
    this.viewupdaterfp(1)
  }
  page(pageSize) {
    // alert(pageSize)
    if (pageSize) {
      this.pageSize = pageSize;

      this.viewupdaterfp(1)
      // }
    }
    else {
      delete this.pageSize;
    }
  }
  viewupdaterfp(page){
    
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }
    this._serv.get_updaterfp(this.pageSize,page).subscribe(
      data => {
          this.personal = data['results'];
          this.pagers = data['totalItems']
          this.pager = this.pagerService.getPager(this.pagers, page, this.pageSize);
          
      });
  }
  updaterfpApprove(id) {


    this._serv.Approveudpaterfp(id).subscribe(
      data => {
        // alert(data['msg'])
        // msg: "Successfully Aproved"
        if (data['msg']== "Successfully Aproved"){
          swal({
            type: 'success',
            title: 'You have successfully Approve New RFP',
            showConfirmButton: false,
            timer: 1500, width: '512px',
          });
        }
        else {
           // alert(this.status)
           swal({
            type: 'error',
            title: ' Please Try again ',
            showConfirmButton: true,
            timer: 1500, width: '512px',
          });
        }
        this.personal = data;
        // this.pagers = data['totalItems']
// Approveudpaterfp

      });
  }
    // datefrom;
    model : any = {}
    postpage:any;
    // dateto;
    
    postoffer(page) {
    
      return this._serv.postupdaterfpfilter(this.pageSize, moment(this.model.datefrom).format('YYYY-MM-DD'), moment(this.model.dateto).format('YYYY-MM-DD'),  this.model.agency , this.model.status ,page ).subscribe(
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
