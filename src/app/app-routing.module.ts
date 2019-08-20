import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CommonComponent } from './layouts/common/common.component';
import { AuthGuard } from './AuthGuards/auth.guard';
import { SidebarViewComponent } from './layouts/sidebar-view/sidebar-view.component';
import { ViewuserComponent } from './viewuser/viewuser.component';

 
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
      { path: 'dashboard', loadChildren: './dashboard/dashboard.module#ConsumerDashboardModule', canActivate: [AuthGuard] },
      // { path: 'viewuser', loadChildren: './viewuser/viewuser.module#ViewUserModule', canActivate: [AuthGuard] },
       { path : 'viewuser' , component: ViewuserComponent},
      { path: 'viewreply', loadChildren: './viewuserreply/viewuserreply.module#ViewUserReplyModule', canActivate: [AuthGuard] },



      { path: 'viewuserpay', loadChildren: './viewuserpayment/viewuserpayment.module#ViewUPModule', canActivate: [AuthGuard] },
      { path: 'viewsingleuser', loadChildren: './viewsignaluser/viewsignaluser.module#ViewUserSingleModule', canActivate: [AuthGuard] },
      { path: 'viewsubscribeuser', loadChildren: './view-subscribe-user/viewsubscribeuser.module#ViewsubscribeUserModule', canActivate: [AuthGuard] },
      { path: 'viewticket', loadChildren: './view-ticket-receive/viewticketuser.module#ViewticketUserModule', canActivate: [AuthGuard] },
      { path: 'viewprice', loadChildren: './viewprice/viewprice.module#ViewpriceModule', canActivate: [AuthGuard] },
      { path: 'viewimage', loadChildren: './viewimage/viewimage.module#ViewimageModule', canActivate: [AuthGuard] },
      { path: 'viewpromo', loadChildren: './viewpromo/viewpromo.module#ViewpromoModule' },





    ]
  },




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
