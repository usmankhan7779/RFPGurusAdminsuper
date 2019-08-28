import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { userService } from '../viewuser/viewuser.service';
import { PagerService } from '../servicefile/paginator.service';

@Component({
  selector: 'app-siglepayment-details',
  templateUrl: './siglepayment-details.component.html',
  styleUrls: ['./siglepayment-details.component.css']
})
export class SiglepaymentDetailsComponent implements OnInit {
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
    this._serv.get_user_single_payment(this.CatName).subscribe(
      data => {
          this.personal = data['results'];
           this.pagers = this.personal
  //  console.log(this.pagers.json())
          console.log(this.personal)

      });
  }

}
