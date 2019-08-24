import { Component, OnInit } from '@angular/core';
import { userService } from '../viewuser/viewuser.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { PagerService } from '../servicefile/paginator.service';

@Component({
  selector: 'app-viewpromo',
  templateUrl: './viewpromo.component.html',
  styleUrls: ['./viewpromo.component.css']
})
export class ViewpromoComponent implements OnInit {
  personal :any;
  A;
  f;
  V;
  T;
  M;
  Y;
  i;
  pager: any = {};
  pageSize = '10';
  pagers;
  pagersss;
  constructor(private _nav: Router,private pagerService: PagerService, private _serv: userService ) { }

  ngOnInit() {
    this.viewpromo(1)
  }
  personal1 :any;
  valid;
  valid1;
  valid2;
  myPicker1;
  price;
  
  // data=[
  //   {value:'Active', veiwvalue:'Active'},
  //   {value:'Expire', veiwvalue:'Expire'}
  // ]
  page(pageSize) {
    // alert(pageSize)
    if (pageSize) {
      this.pageSize = pageSize;

      this.viewpromo(1)
      // }
    }
    else {
      delete this.pageSize;
    }
  }
  viewpromo(page){
    
     
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }
    this._serv.get_promo(this.pageSize,page).subscribe(
      data => {
          this.personal = data['results'];
          this.pagers = data['totalItems']
          this.pager = this.pagerService.getPager(this.pagers, page, this.pageSize);
          this.valid= data['results'][0]['valid']
          if(this.valid==true){
            return this.valid='Active'
          }
          else {
            return this.valid='Expire'
          }
          
      });
  }
  discount;
  status;
  datefrom;
  dateto;
  id;

  veiwvalue(val1,val2,val3,val4,val5){
    this.discount=val1;
    this.status=val2;
    this.datefrom=val3;
    this.dateto=val4;
    this.id=val5
  }
  activeClick(did) {
       
    this._serv.delpromo(did).subscribe(data => {
        console.log(data);
        // this.catagoryId,
        Swal({
            type: 'success',
            title: 'Successfully Deleted',
            showConfirmButton: true,
            timer: 1500
        })

        this.viewpromo(1);
    }
    );
}
// discount;
// status;
// datefrom;
// dateto;
// id;
postdatefrom;
postdateto;
postdiscount;
postcode;
postcodeA = "A";
postcodeB;
postcodeT = "True";
postcodeM;
postcodeY = "T";
// veiwvalue(val1,val2,val3,val4,val5){
//   this.discount=val1;
//   this.status=val2;
//   this.datefrom=val3;
//   this.dateto=val4;
//   this.id=val5
// }
checked8(event, i) {
  if (event.target.checked == true) {
      console.log(event.target.checked)
      this.postcodeA = "A";
       
      console.log(this.postcodeA,"fixed rate");
  }
  
  console.log(this.postcodeA)
}
checked9(event, i) {
if (event.target.checked == true) {
    console.log(event.target.checked)
    this.postcodeA = "V";
    
    console.log(this.postcodeA, );
}
 
console.log(this.postcodeA)
}
checked10(event, i) {
if (event.target.checked == true) {
    console.log(event.target.checked)
    this.postcodeY = "T";
  
    console.log(this.postcodeA, );
}
 
console.log(this.postcodeA)
}
checked11(event, i) {
if (event.target.checked == true) {
    console.log(event.target.checked)
    this.postcodeY = "Y";
     
    console.log(this.postcodeY, );
}
 
console.log(this.postcodeY)
}
checked12(event, i) {
if (event.target.checked == true) {
    console.log(event.target.checked)
    this.postcodeY = "Y";
   
    console.log(this.postcodeY, );
}
 
console.log(this.postcodeY)
}
checked13(event, i) {
if (event.target.checked == true) {
    console.log(event.target.checked)
    this.postcodeT = "True";
    
    console.log(this.postcodeT );
}
 
console.log(this.postcodeT)
}
checked14(event, i) {
if (event.target.checked == true) {
    console.log(event.target.checked)
    this.postcodeT = "False";
    
    console.log(this.postcodeT );
}
 
console.log(this.postcodeT)
}
model : any = {}
addpromocode_update( ) {
  console.log(this.postdatefrom,this.postdateto,this.postdiscount,this.postcode,this.postcodeA,"y"  )
  this._serv.promocode_add(this.postdatefrom,this.postdateto,this.postdiscount,this.postcodeT,this.postcode,this.postcodeA,this.postcodeY ).subscribe(
    // moment(this.date.value['dateto']).format('YYYY-MM-DD'),
  
data => {
  swal({
    type: 'success',
    title: 'You have successfully add promo code ',
    showConfirmButton: true,
    timer: 1500, width: '512px',
  });
  this.viewpromo(1)
  console.log(data['msg'])
  
  
  
})
}

// valid;
promocode_update(from ) {
  console.log(from,this.id,this.datefrom, this.dateto, this.discount )
  this._serv.promocode_update(this.id,this.datefrom, this.dateto, this.discount , this.valid ).subscribe(
    // moment(this.date.value['dateto']).format('YYYY-MM-DD'),
  
data => {

  console.log(data)
  this.personal1 = data.json()
  
   
})
}
}
