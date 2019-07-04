import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Http, HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {  HttpClientModule } from '@angular/common/http';
import { PagerService } from '../servicefile/paginator.service';
import {  ViewsubscriberuserRoutes } from './viewsubscribeuser.routing';
 
import { userService } from '../viewuser/viewuser.service';
import { ViewSubscribeUserComponent } from './view-subscribe-user.component';

 
 

 
 
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ViewsubscriberuserRoutes),
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpModule,
       
      
      
    ],
    declarations: [ViewSubscribeUserComponent],
    providers:[userService,PagerService]
})

export class ViewsubscribeUserModule {}
