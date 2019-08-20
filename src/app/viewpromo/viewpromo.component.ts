import { Component, OnInit } from '@angular/core';
import { userService } from '../viewuser/viewuser.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewpromo',
  templateUrl: './viewpromo.component.html',
  styleUrls: ['./viewpromo.component.css']
})
export class ViewpromoComponent implements OnInit {
  personal :any;
  pager: any = {};
  pageSize = '10';
  pagers;
  pagersss;
  constructor(private _nav: Router, private _serv: userService ) { }

  ngOnInit() {
    this.viewpromo()
  }
  valid;
  valid1;
  valid2;
  myPicker1;
  price;
  
  // data=[
  //   {value:'Active', veiwvalue:'Active'},
  //   {value:'Expire', veiwvalue:'Expire'}
  // ]
  viewpromo(){
    
    
    this._serv.get_promo().subscribe(
      data => {
          this.personal = data;
          this.pagers = data['totalItems']
          this.valid= data[0]['valid']
          if(this.valid==true){
            return this.valid='Active'
          }
          else {
            return this.valid='Expire'
          }
          
      });
  }
  discount;
  status;
  datefrom;
  dateto;
  id
  veiwvalue(val1,val2,val3,val4,val5){
    this.discount=val1;
    this.status=val2;
    this.datefrom=val3;
    this.dateto=val4;
    this.id=val5
  }
}
