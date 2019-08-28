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
  state_preference: any = [];
  
  viewuser(){
    
    // alert(page)
    this._serv.get_user_single(this.CatName).subscribe(
      data => {
          this.personal = data.json();
           this.pagers = this.personal
  //  console.log(this.pagers.json())
          // console.log(this.personal.user_preference)
          
      let democompprods;
      democompprods = this.personal.UserDetail.state_preference;
      console.log(democompprods)

      for (let prod of democompprods) {
        // this.pagers.push(prods.user_preference);
        // console.log(prod.user_preference)
this.state_preference.push( prod.split(',',5))
          // prod["state_preference"] = prod["state_preference"].split(',', 3000);
        // alert(prod.user_preference)
        // console.log(prod.split(',',50))
        console.log(this.state_preference,'state preference')
        
      }
      
          // this.pager = this.pagerService.getPager(this.personal['totalItems'], page, 10);
      });
  }

}
