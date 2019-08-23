import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Http, HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 
import { Routes } from '@angular/router';
 
// import { userService } from './viewuser.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { PagerService } from '../servicefile/paginator.service';
import { MaterialModule } from '../app.module';
import { ViewnewrfpdetailsRoutes } from './viewnewrfpdetails.routing';
import { ViewnewrfpdetailsComponent } from './viewnewrfpdetails.component';
// import { MdModule } from '../md/md.module';
// import { MaterialModule } from '../app.module';
// import { ConsumerDashboardRoutes } from './viewuser.routing';
 
 

 
 
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ViewnewrfpdetailsRoutes),
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        HttpModule,
        MaterialModule,
        
      
      
    ],
    declarations: [ViewnewrfpdetailsComponent],
    // providers:[userService,PagerService]
})

export class ViewnewrfpdetailsModule {}
