import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { userService } from '../viewuser/viewuser.service';
import { PagerService } from '../servicefile/paginator.service';

@Component({
  selector: 'app-viewsignaluser',
  templateUrl: './viewsignaluser.component.html',
  styleUrls: ['./viewsignaluser.component.scss']
})
export class ViewsignaluserComponent implements OnInit {
  private sub: any;
  CatName: string;
  personal :any;
  pager: any = {};
  pageSize = '10';
  pagers:any;
  constructor(private route: ActivatedRoute,private _nav: Router, private _serv: userService,private pagerService: PagerService) { }

  ngOnInit() {
    this.sub = this.route
    .queryParams
    .subscribe(params => {
      // Defaults to 0 if no query param provided.
      this.CatName = params['ProID'] || '0';
      this.viewuser()
    })
  // alert(this.CatName)
  
  }
  viewuser(){
    
    // alert(page)
    this._serv.get_user_single(this.CatName).subscribe(
      data => {
          this.personal = data.json();
           this.pagers = this.personal
  //  console.log(this.pagers.json())
          console.log(this.personal.user_preference)
          
      // let democompprods;
      // democompprods = data;
      // console.log(democompprods)

      // for (let prods of democompprods.json) {
      //   // this.pagers.push(prods.user_preference);
      //   console.log(prods.user_preference)
      //   alert(prods.user_preference)
      // }
          // this.pager = this.pagerService.getPager(this.personal['totalItems'], page, 10);
      });
  }

}
