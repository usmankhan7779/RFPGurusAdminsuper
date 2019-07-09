import { Routes } from '@angular/router';
 
import { ViewimageComponent } from './viewimage.component';
 
 
 

export const ViewimageRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: ViewimageComponent
    }]
}
];
