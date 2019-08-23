import { Component, OnInit } from '@angular/core';
import { userService } from '../viewuser/viewuser.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewnewrfp',
  templateUrl: './viewnewrfp.component.html',
  styleUrls: ['./viewnewrfp.component.css']
})
export class ViewnewrfpComponent implements OnInit {
  personal :any;
  pager: any = {};
  pageSize = '10';
  pagers;
  pagersss;
  myPicker1;
  dateto;
  discount;
  datefrom;
  valid;
  constructor(private _nav: Router, private _serv: userService) { }

  ngOnInit() {
    this.viewnewrfp()
  }
  viewnewrfp(){
    
    
    this._serv.get_newrfp().subscribe(
      data => {
          this.personal = data;
          this.pagers = data['totalItems']
          
          
      });
  }

}
