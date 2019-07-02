import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewuserComponent } from './viewuser.component';
import { ViewuserRoutes } from './viewuser.routing';
// import { MdModule } from '../md/md.module';
// import { MaterialModule } from '../app.module';
// import { ConsumerDashboardRoutes } from './viewuser.routing';
 
 

 
 
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ViewuserRoutes),
        FormsModule,
        ReactiveFormsModule,
        // MdModule,
       
      
      
    ],
    declarations: [ViewuserComponent]
})

export class ViewUserModule {}
