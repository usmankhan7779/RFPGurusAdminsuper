import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Http, HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { ViewuserComponent } from './viewuser.component';
import {  ViewuserpayRoutes } from './viewuserpayment.routing';
// import { userService } from './viewuser.service';
import {  HttpClientModule } from '@angular/common/http';
import { PagerService } from '../servicefile/paginator.service';
import { ViewuserpaymentComponent } from './viewuserpayment.component';
import { userService } from '../viewuser/viewuser.service';
// import { MdModule } from '../md/md.module';
// import { MaterialModule } from '../app.module';
// import { ConsumerDashboardRoutes } from './viewuser.routing';
 
 
import { MaterialModule } from '../app.module';
 
 
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ViewuserpayRoutes),
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpModule,
        MaterialModule
       
      
      
    ],
    declarations: [ViewuserpaymentComponent],
    providers:[userService,PagerService],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
})

export class ViewUPModule {}
