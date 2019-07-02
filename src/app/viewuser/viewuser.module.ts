import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Http, HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewuserComponent } from './viewuser.component';
import { ViewuserRoutes } from './viewuser.routing';
import { userService } from './viewuser.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { PagerService } from '../servicefile/paginator.service';
// import { MdModule } from '../md/md.module';
// import { MaterialModule } from '../app.module';
// import { ConsumerDashboardRoutes } from './viewuser.routing';
 
 

 
 
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ViewuserRoutes),
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpModule,
       
      
      
    ],
    declarations: [ViewuserComponent],
    providers:[userService,PagerService]
})

export class ViewUserModule {}
