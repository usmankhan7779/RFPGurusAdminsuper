import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Http, HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {  HttpClientModule } from '@angular/common/http';
import { PagerService } from '../servicefile/paginator.service';
 
 
import { userService } from '../viewuser/viewuser.service';
import { ViewimageRoutes } from './viewimage.routing';
import { ViewimageComponent } from './viewimage.component';
 
 
 

 

 
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ViewimageRoutes),
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpModule,
       
      
      
    ],
    declarations: [ViewimageComponent],
    providers:[userService,PagerService]
})

export class ViewimageModule {}
