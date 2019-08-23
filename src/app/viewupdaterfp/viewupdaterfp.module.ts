import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Http, HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewupdaterfpComponent } from './viewupdaterfp.component';
import { Routes } from '@angular/router';
import { ViewupdaterfpRoutes } from './viewupdaterfp.routing';
// import { userService } from './viewuser.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { PagerService } from '../servicefile/paginator.service';
import { MaterialModule } from '../app.module';
import { userService } from '../viewuser/viewuser.service';
// import { MdModule } from '../md/md.module';
// import { MaterialModule } from '../app.module';
// import { ConsumerDashboardRoutes } from './viewuser.routing';
 
 

 
 
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ViewupdaterfpRoutes),
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpModule,
        MaterialModule,
        
      
      
    ],
    declarations: [ViewupdaterfpComponent],
     providers:[userService,PagerService]
})

export class ViewupdaterfpModule {}
