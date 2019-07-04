import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Http, HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {  HttpClientModule } from '@angular/common/http';
import { PagerService } from '../servicefile/paginator.service';
 
 
import { userService } from '../viewuser/viewuser.service';
import { ViewticketrecRoutes } from './viewticketuser.routing';
import { ViewTicketReceiveComponent } from './view-ticket-receive.component';
 

 
 

 
 
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ViewticketrecRoutes),
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpModule,
       
      
      
    ],
    declarations: [ViewTicketReceiveComponent],
    providers:[userService,PagerService]
})

export class ViewticketUserModule {}
