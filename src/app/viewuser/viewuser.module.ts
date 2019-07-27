import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Http, HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {  HttpClientModule } from '@angular/common/http';
import { PagerService } from '../servicefile/paginator.service';
 
 
import { userService } from './viewuser.service';
import { ViewuserComponent } from './viewuser.component';
import { ViewUserRoutes } from './viewuser.routing';
 
 
 
 

 

 
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ViewUserRoutes),
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpModule,
       
      
      
    ],
    declarations: [ViewuserComponent],
    providers:[userService,PagerService]
})

export class ViewUserModule {}
