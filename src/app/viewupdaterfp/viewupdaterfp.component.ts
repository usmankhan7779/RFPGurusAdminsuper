import { Component, OnInit } from '@angular/core';
import { userService } from '../viewuser/viewuser.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

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
  pager: any = {};
  pageSize = '10';
  pagers;
  pagersss;
  constructor(private _nav: Router, private _serv: userService) { }

  ngOnInit() {
    this.viewupdaterfp()
  }
  viewupdaterfp(){
    
    
    this._serv.get_updaterfp().subscribe(
      data => {
          this.personal = data;
          this.pagers = data['totalItems']
          
          
      });
  }
  updaterfpApprove(id) {


    this._serv.Approveudpaterfp(id).subscribe(
      data => {
        alert(data['msg'])
        this.personal = data;
        // this.pagers = data['totalItems']
// Approveudpaterfp

      });
  }
}