 
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 
import { PagerService } from '../servicefile/paginator.service';
import { userService } from '../viewuser/viewuser.service';
import Swal from 'sweetalert2';
 

@Component({
  selector: 'app-viewprice',
  templateUrl: './viewprice.component.html',
  styleUrls: ['./viewprice.component.scss']
})
export class ViewpriceComponent implements OnInit {
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
    
    
    this._serv.get_price_payment().subscribe(
      data => {
          this.personal = data.json();
          this.pagers = data['totalItems']

   
          console.log(this.personal)
          
      });
  }
  price;
  package;
  duration;
id;
  veiwvalue(val1,val2,val3,val4){
    // <td *ngIf="item.duration == 'M'">Monthly </td>
    // <td *ngIf="item.duration == 'Q'">Quater </td>
    // <td *ngIf="item.duration == 'Y'">Yearly </td>
    // <td *ngIf="item.duration == 'S'">Half Year </td>
    // <!-- <td>{{item.pkg_type}}</td> -->
    // <td *ngIf="item.pkg_type == 'B'">Basic </td>
    // <td *ngIf="item.pkg_type == 'R'">Regular </td>
    // <td *ngIf="item.pkg_type == 'C'">Classic </td>
    // <td *ngIf="item.pkg_type == 'P'">Premium </td>
    // this.duration = val1;
    // this.package = val2;
    this.price = val3;
    if(val1 == 'M'){
      this.duration = "Monthly"
    }
    else if (val1 == 'Q'){
      this.duration ="Quater"
    }
    else if (val1 == 'Y'){
      this.duration ="Yearly"
    }
    else if (val1 == 'S'){
      this.duration ="Half Year"
    }
    if(val2 == 'B'){
      this.package = "Basic"
    }
    else if (val2 == 'R'){
      this.package ="Regular"
    }
    else if (val2 == 'C'){
      this.package ="Classic"
    }
    else if (val2 == 'P'){
      this.package ="Premium"
    }
    this.id=val4;
console.log(val1,val2,val3)

  }

  activeClick(price) {
       
    this._serv.postprice(this.id,price).subscribe(data => {
        console.log(data);
        // this.catagoryId,
        Swal.fire({
            type: 'success',
            title: 'Successfully updated',
            showConfirmButton: true,
            timer: 1500
        })

        this.viewuser();
    }
    );
}
}
