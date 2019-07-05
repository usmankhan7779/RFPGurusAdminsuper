import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userService } from './viewuser.service';
import { PagerService } from '../servicefile/paginator.service';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl, FormGroupDirective, NgForm } from '@angular/forms';

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
  date;

  constructor(private _nav: Router, private _serv: userService,private pagerService: PagerService,private formbuilders : FormBuilder  ) { }

  ngOnInit() {  
 this.viewuser(1)
 this.date = this.formbuilders.group({
  datefrom : [''],
  dateto : [''],
 
  })
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
  postoffer(page) {
   
    return this._serv.postdate(this.date.value['datefrom'], this.date.value['dateto'] ).subscribe(

  data => {

    console.log(data)
    this.postpage = data
    console.log(this.postpage)
    this.pager = this.pagerService.getPager(this.postpage['totalItems'], page, 10);
  })
  }
}

