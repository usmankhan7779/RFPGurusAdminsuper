import { Routes } from '@angular/router';
 
import { ViewnewrfpdetailsComponent } from './viewnewrfpdetails.component';
 
 

export const ViewnewrfpdetailsRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: ViewnewrfpdetailsComponent
    }]
}
];
