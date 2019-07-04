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
import { ViewusersignalRoutes } from './viewsignaluser.routing';
import { ViewsignaluserComponent } from './viewsignaluser.component';
import { userService } from '../viewuser/viewuser.service';
// import { MdModule } from '../md/md.module';
// import { MaterialModule } from '../app.module';
// import { ConsumerDashboardRoutes } from './viewuser.routing';
 
 

 
 
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ViewusersignalRoutes),
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpModule,
       
      
      
    ],
    declarations: [ViewsignaluserComponent],
    providers:[userService,PagerService]
})

export class ViewUserSingleModule {}
