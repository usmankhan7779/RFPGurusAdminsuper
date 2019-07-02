import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { userService } from './viewuser.service';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.scss']
})
export class ViewuserComponent implements OnInit {
  // personal: any ;
  public personal;
  constructor(private _nav: Router, private _serv: userService, ) { }

  ngOnInit() {  
  this._serv.get_user().subscribe(
    data => {
        this.personal = data['results'];
 
        console.log(this.personal)

    });
  }

}
