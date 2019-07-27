import { Routes } from '@angular/router';
import { ViewuserreplyComponent } from './viewuserreply.component';
 
 
 
 
 

export const ViewUserReplyRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: ViewuserreplyComponent
    }]
}
];
