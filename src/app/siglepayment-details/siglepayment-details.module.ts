import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Http, HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { ViewuserComponent } from './viewuser.component';
// import { ViewuserRoutes } from './viewsignaluser.routing';
// import { userService } from './viewuser.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { PagerService } from '../servicefile/paginator.service';
 
 
import { userService } from '../viewuser/viewuser.service';
import { SiglepaymentDetailsComponent } from './siglepayment-details.component';
import { ViewpaymentsignalRoutes } from './siglepayment-details.routing';
// import { MdModule } from '../md/md.module';
// import { MaterialModule } from '../app.module';
// import { ConsumerDashboardRoutes } from './viewuser.routing';
 
 

 
 
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ViewpaymentsignalRoutes),
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpModule,
       
      
      
    ],
    declarations: [SiglepaymentDetailsComponent],
    providers:[userService,PagerService]
})

export class ViewpaymentSingleModule {}
