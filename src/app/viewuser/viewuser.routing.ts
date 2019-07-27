import { Routes } from '@angular/router';
import { ViewuserComponent } from './viewuser.component';
 
 
 
 
 
 

export const ViewUserRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: ViewuserComponent
    }]
}
];
