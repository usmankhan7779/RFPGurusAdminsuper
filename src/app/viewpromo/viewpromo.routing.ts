import { Routes } from '@angular/router';
import { ViewpromoComponent } from './viewpromo.component';
 
 

export const ViewpromoRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: ViewpromoComponent
    }]
}
];
