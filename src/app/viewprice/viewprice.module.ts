import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Http, HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {  HttpClientModule } from '@angular/common/http';
import { PagerService } from '../servicefile/paginator.service';
 
 
import { userService } from '../viewuser/viewuser.service';
import { ViewpriceRoutes } from './viewprice.routing';
import { ViewpriceComponent } from './viewprice.component';
 
 

import { MaterialModule } from '../app.module';

 
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ViewpriceRoutes),
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpModule,
        MaterialModule
      
      
    ],
    declarations: [ViewpriceComponent],
    providers:[userService,PagerService]
})

export class ViewpriceModule {}
