import { Routes } from '@angular/router';
// import { ViewuserComponent } from './viewuser.component';
import { ViewsignaluserComponent } from './viewsignaluser.component';
 
 

export const ViewusersignalRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: ViewsignaluserComponent
    }]
}
];
