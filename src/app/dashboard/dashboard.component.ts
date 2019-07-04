import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userService } from '../viewuser/viewuser.service';
import { PagerService } from '../servicefile/paginator.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  // public personal;
  personal: any= []; 
  constructor(private _nav: Router, private _serv: userService,private pagerService: PagerService  ) { }

  ngOnInit() {
    this.viewuser()
  }
  viewuser(){
   
    // alert(page)
    this._serv.get_user_status().subscribe(
      data => {
          this.personal = data.json();
   
          // console.log(this.personal['Total_Yearly_Subscriber'])
          // this.pager = this.pagerService.getPager(data['totalItems'], page, 20);
      });
  }

}
