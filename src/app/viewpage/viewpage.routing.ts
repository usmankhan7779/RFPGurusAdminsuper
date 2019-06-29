import { Routes } from '@angular/router';
import { ViewpageComponent } from './viewpage.component';
// import { NewProductComponent } from './new-product.component';

export const NewProduct: Routes = [
    {

        path: '',
        children: [ {
            path: '',
            component: ViewpageComponent
        }]
    }
];
