import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { userService } from '../viewuser/viewuser.service';
import { PagerService } from '../servicefile/paginator.service';

@Component({
  selector: 'app-viewnewrfpdetails',
  templateUrl: './viewnewrfpdetails.component.html',
  styleUrls: ['./viewnewrfpdetails.component.css']
})
export class ViewnewrfpdetailsComponent implements OnInit {
  private sub: any;
  CatName: string;
  personal :any;
  pager: any = {};
  pageSize = '10';
  pagers:any;
  viewid;
  constructor(private route: ActivatedRoute,private _nav: Router, private _serv: userService,private pagerService: PagerService) { }

  ngOnInit() {
    this.sub = this.route
    .queryParams
    .subscribe(params => {
      // Defaults to 0 if no query param provided.
      this.CatName = params['ProID'] || '0';
      
      this.viewnewrfp(this.CatName);
    })
 
  
  }
  idview;
  viewnewrfp(CatName){
    
    
    this._serv.get_newrfp_details(this.CatName).subscribe(
      data => {
          this.personal = data;
          this.idview = this.personal['results'];
          this.pagers = data['totalItems']
      
          // for (const tmp of this.personal) {
      
          //   if (CatName == tmp.id) {
          //     this.idview = tmp;
          
               
               
              
          //   }
          // }
          
          
      });
  }
 
}

