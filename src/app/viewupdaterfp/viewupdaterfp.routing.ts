import { Routes } from '@angular/router';
import { ViewupdaterfpComponent } from './viewupdaterfp.component';
 
 

export const ViewupdaterfpRoutes: Routes = [
    {

      path: '',
      children: [ {
        path: '',
        component: ViewupdaterfpComponent
    }]
}
];
