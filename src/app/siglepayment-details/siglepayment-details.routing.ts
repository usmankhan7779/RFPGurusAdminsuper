import { Routes } from '@angular/router';
import { SiglepaymentDetailsComponent } from './siglepayment-details.component';
 
 
 

export const ViewpaymentsignalRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: SiglepaymentDetailsComponent
    }]
}
];
