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
  personal: any;
  pager: any = {};
  pageSize = '10';
  pagers: any;
  constructor(private route: ActivatedRoute, private _nav: Router, private _serv: userService, private pagerService: PagerService) { }

  ngOnInit() {
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.CatName = params['ProID'] || '0';
        this.viewuser()
      })
     

  }
  state_preference: any = [];
  user_preference:any=[];

  viewuser() {


    this._serv.get_user_single(this.CatName).subscribe(
      data => {
        this.personal = data.json();
        this.pagers = this.personal


        let democompprods;
        democompprods = this.personal.UserDetail;
        console.log(democompprods)

        for (let prod of democompprods.state_preference) {

          this.state_preference.push(prod.split(',', 50))

          console.log(this.state_preference, 'state preference')

        }
        for (let prod of democompprods.user_preference) {

          this.user_preference.push(prod.split(',', 50))

          console.log(this.user_preference, 'state user_preference')

        }



      });
  }

}
