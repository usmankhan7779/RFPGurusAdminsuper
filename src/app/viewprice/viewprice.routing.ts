import { Routes } from '@angular/router';
// import { ViewTicketReceiveComponent } from './view-ticket-receive.component';
import { ViewpriceComponent } from './viewprice.component';
 
 
 

export const ViewpriceRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: ViewpriceComponent
    }]
}
];
