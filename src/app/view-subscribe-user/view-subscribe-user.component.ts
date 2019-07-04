import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { userService } from './viewuser.service';
import { PagerService } from '../servicefile/paginator.service';
import { userService } from '../viewuser/viewuser.service';

@Component({
  selector: 'app-view-subscribe-user',
  templateUrl: './view-subscribe-user.component.html',
  styleUrls: ['./view-subscribe-user.component.scss']
})
export class ViewSubscribeUserComponent implements OnInit {
// personal: any ;
personal :any;
pager: any = {};
pageSize = '10';
pagers;
constructor(private _nav: Router, private _serv: userService,private pagerService: PagerService  ) { }

ngOnInit() {  
this.viewuser(1)
}
viewuser(page){
  if (page < 1 || page > this.pager.totalPages) {
    return;
  }
  // alert(page)
  this._serv.get_user_subscriber(page).subscribe(
    data => {
        this.personal = data.json();
        this.pagers = data['totalItems']

//  console.log(this.pagers.json())
        console.log(this.personal)
        this.pager = this.pagerService.getPager(this.personal['totalItems'], page, 10);
    });
}

}

