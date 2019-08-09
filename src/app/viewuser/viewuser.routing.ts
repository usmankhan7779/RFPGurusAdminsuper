import { Routes } from '@angular/router';
import { ViewuserComponent } from './viewuser.component';
 
 

export const ViewuserRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: ViewuserComponent
    }]
}
];
