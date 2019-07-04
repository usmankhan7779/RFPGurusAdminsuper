import { Routes } from '@angular/router';
import { ViewTicketReceiveComponent } from './view-ticket-receive.component';
 
 
 

export const ViewticketrecRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: ViewTicketReceiveComponent
    }]
}
];
