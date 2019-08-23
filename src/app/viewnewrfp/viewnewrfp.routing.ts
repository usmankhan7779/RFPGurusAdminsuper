import { Routes } from '@angular/router';
import { ViewnewrfpComponent } from './viewnewrfp.component';
 
 

export const ViewnewrfpRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: ViewnewrfpComponent
    }]
}
];
