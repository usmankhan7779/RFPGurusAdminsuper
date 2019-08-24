import { Component, OnInit } from '@angular/core';
import { userService } from '../viewuser/viewuser.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { PagerService } from '../servicefile/paginator.service';

@Component({
  selector: 'app-viewnewrfp',
  templateUrl: './viewnewrfp.component.html',
  styleUrls: ['./viewnewrfp.component.css']
})
export class ViewnewrfpComponent implements OnInit {
  personal: any;
  pager: any = {};
  pageSize = '10';
  pagers;
  pagersss;
  myPicker1;
  dateto;
  discount;
  datefrom;
  valid;
  constructor(private _nav: Router,private pagerService: PagerService,  private _serv: userService) { }

  ngOnInit() {
    this.viewnewrfp(1)
  }
  viewnewrfp(page) {


    this._serv.get_newrfp(page).subscribe(
      data => {
        this.personal = data;
        this.pagers = data['totalItems']
        this.pager = this.pagerService.getPager(this.pagers, page, 10);


      });
  }

  newrfpApprove(id) {


    this._serv.Approvenewrfp(id).subscribe(
      data => {
        alert(data)
        this.personal = data;
        // this.pagers = data['totalItems']
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

      });
  }


}
