// import { HomeService } from './../home/home.service';
import { Component, OnInit, Output, EventEmitter, Input, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
 
import swal from 'sweetalert2';
 
 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css',
   

]
})
export class HeaderComponent implements OnInit {
  public blink = false;
   
  // @Input() public appAutoFocus: boolean;

  response(event) {
    this.query = event;
  }
  uname;
  local_admin: boolean = false;
  local;
  lacal_user: boolean = false;
  id;
  title;
  loaded = false;
  public query: any;
  public Rfp: any;
  public selected: any;
  wrfp;
  mainSearch = 0;
  
 
  // private homeServ: HomeService,
  constructor(private el: ElementRef,    private _nav: Router) {
   
  }
  
   
  ngOnInit() {
    
  }
  
}
