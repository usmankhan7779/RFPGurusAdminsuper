import { Routes } from '@angular/router';
// import { ViewuserComponent } from './viewuser.component';
// import { ViewsignaluserComponent } from './viewsignaluser.component';
import { ViewSubscribeUserComponent } from './view-subscribe-user.component';
 
 

export const ViewsubscriberuserRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: ViewSubscribeUserComponent
    }]
}
];
