import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { userService } from '../viewuser/viewuser.service';

@Component({
  selector: 'app-viewuserreply',
  templateUrl: './viewuserreply.component.html',
  styleUrls: ['./viewuserreply.component.css']
})
export class ViewuserreplyComponent implements OnInit {
  public sub: any;
  CatName: string;
  replyid;
  show;
  form : FormGroup ;
  model = {};
  des;
  constructor(private route: ActivatedRoute, private fb : FormBuilder,private _serv :userService) { }

  ngOnInit() {
    this.form= this.fb.group({
      des : new FormControl("", Validators.required )
    });
    window.scroll(0,0);
    this.sub = this.route
    .queryParams
    .subscribe(params => {
      // Defaults to 0 if no query param provided.
      this.replyid = params['id'] || '0';
      console.log(this.replyid)
    })
    this.showrecord();
  }
  subjests;
  showrecord(){
    this._serv.eachview(this.replyid).subscribe(data => {
     
this.show = data.reply_ticket;
this.subjests = data;
// alert(this.show);
console.log(this.subjests);
    })
  }
descr

}
