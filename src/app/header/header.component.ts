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
  
   
  // @Input() public appAutoFocus: boolean;
 
 
  // private homeServ: HomeService,
  constructor(private el: ElementRef,    private _nav: Router) {
   
  }
  
   
  ngOnInit() {
    
  }
  
}
