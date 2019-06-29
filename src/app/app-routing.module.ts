import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CommonComponent } from './common/common.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
     

     
  {
      path: '',
      component: CommonComponent,
      children: [
          { path: 'guid', loadChildren: './viewpage/viewpage.module#NewProductModule' },
          
      ]
  },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
