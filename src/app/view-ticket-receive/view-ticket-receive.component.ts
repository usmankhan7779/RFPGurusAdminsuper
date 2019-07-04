import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { userService } from './viewuser.service';
import { PagerService } from '../servicefile/paginator.service';
import { userService } from '../viewuser/viewuser.service';


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
constructor(private _nav: Router, private _serv: userService,private pagerService: PagerService  ) { }

ngOnInit() {  
this.viewuser(1)
}
viewuser(page){
  if (page < 1 || page > this.pager.totalPages) {
    return;
  }
  // alert(page)
  this._serv.get_user_ticket(page).subscribe(
    data => {
        this.personal = data.json();
 
        console.log(this.personal)
        this.pager = this.pagerService.getPager(this.personal['totalItems'], page, 10);
    });
}

}

