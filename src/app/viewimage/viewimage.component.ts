 
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 
import { PagerService } from '../servicefile/paginator.service';
import { userService } from '../viewuser/viewuser.service';
 

@Component({
  selector: 'app-viewimage',
  templateUrl: './viewimage.component.html',
  styleUrls: ['./viewimage.component.scss']
})
export class ViewimageComponent implements OnInit {
  personal :any;
  pager: any = {};
  pageSize = '10';
  pagers;
  pagersss;
  date;
  constructor(private _nav: Router, private _serv: userService,private pagerService: PagerService  ) { }
  ngOnInit() {
    this.viewuser()
  }
  viewuser(){
    
    
    this._serv.get_price_img().subscribe(
      data => {
          this.personal = data.json();
       

   console.log(this.personal.free_trial)
          console.log(this.personal)
          
      });
  }
  

}
