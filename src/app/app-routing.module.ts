import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CommonComponent } from './common/common.component';
import { SidebarViewComponent } from './sidebar-view/sidebar-view.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
     

     
  {
      path: '',
      component: CommonComponent,
      children: [
        //  { path: 'login', loadChildren: './login/login.module#LoginModule' },
          
      ]
  },
  {
    path: '',
    component: SidebarViewComponent,
    children: [
        { path: 'rfpdashboard', loadChildren: './dashboard/dashboard.module#ConsumerDashboardModule' },
        { path: 'viewuser', loadChildren: './viewuser/viewuser.module#ViewUserModule' },
        
    ]
},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }