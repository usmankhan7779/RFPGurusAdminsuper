import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userService } from './viewuser.service';
import { PagerService } from '../servicefile/paginator.service';

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
  constructor(private _nav: Router, private _serv: userService,private pagerService: PagerService  ) { }

  ngOnInit() {  
 this.viewuser(1)
  }
  viewuser(page){
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }
    // alert(page)
    this._serv.get_user(page).subscribe(
      data => {
          this.personal = data.json();
   
          console.log(this.personal)
          this.pager = this.pagerService.getPager(data['totalItems'], page, 20);
      });
  }

}

