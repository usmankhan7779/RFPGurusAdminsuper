import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { userService } from '../viewuser/viewuser.service';
import { PagerService } from '../servicefile/paginator.service';
import swal from 'sweetalert2';

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
  item;
  newrfpApprove(id) {


    this._serv.Approvenewrfp(id).subscribe(
      data => {
        alert(data)
        this.personal = data;
        // this.pagers = data['totalItems']
        if (data['msg']== "Successfully Aproved"){
          swal({
            type: 'success',
            title: 'You have successfully Approve New RFP',
            showConfirmButton: false,
            timer: 1500, width: '512px',
          });
        }
        else {
           // alert(this.status)
           swal({
            type: 'error',
            title: ' Please Try again ',
            showConfirmButton: true,
            timer: 1500, width: '512px',
          });
        }

      });
  }
 
}

