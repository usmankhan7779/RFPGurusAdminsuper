import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-view',
  templateUrl: './sidebar-view.component.html',
  styleUrls: ['./sidebar-view.component.scss']
})
export class SidebarViewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  w3_open() {
    document.getElementById("mySidebar").style.display = "block";
  }
  w3_close() {
    document.getElementById("mySidebar").style.display = "none";
  }
}
