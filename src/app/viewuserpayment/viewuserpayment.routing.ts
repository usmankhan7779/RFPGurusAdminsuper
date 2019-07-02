import { Routes } from '@angular/router';
 
import { ViewuserpaymentComponent } from './viewuserpayment.component';
 
 

export const ViewuserpayRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: ViewuserpaymentComponent
    }]
}
];
