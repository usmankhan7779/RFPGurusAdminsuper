import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Http, HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {  HttpClientModule } from '@angular/common/http';
import { PagerService } from '../servicefile/paginator.service';
 
 
import { userService } from '../viewuser/viewuser.service';
import { ViewUserReplyRoutes } from './viewuserreply.routing';
import { ViewuserreplyComponent } from './viewuserreply.component';
 
 
 
 

 

 
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ViewUserReplyRoutes),
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpModule,
       
      
      
    ],
    declarations: [ViewuserreplyComponent],
    providers:[userService,PagerService]
})

export class ViewUserReplyModule {}
