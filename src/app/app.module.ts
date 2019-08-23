import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
  MatFormFieldModule
} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { CommonComponent } from './layouts/common/common.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './sidebar/sidebar.component';
import { Http, HttpModule } from '@angular/http';
import { SidebarViewComponent } from './layouts/sidebar-view/sidebar-view.component';
import { HomeService } from '../app/home/home.service';
import { ReactiveFormsModule , FormsModule} from '@angular/forms';
import { ViewsignaluserComponent } from './viewsignaluser/viewsignaluser.component';
import { ViewSubscribeUserComponent } from './view-subscribe-user/view-subscribe-user.component';
import { ViewTicketReceiveComponent } from './view-ticket-receive/view-ticket-receive.component';
import { ViewpriceComponent } from './viewprice/viewprice.component';
import { ViewimageComponent } from './viewimage/viewimage.component';
import { AuthGuard } from './AuthGuards/auth.guard';
import { PagerService } from './servicefile/paginator.service';
import { ViewuserComponent } from './viewuser/viewuser.component';
 import { userService} from './viewuser/viewuser.service'
import { from } from 'rxjs';
import { ViewuserreplyComponent } from './viewuserreply/viewuserreply.component';
import { ViewpromoComponent } from './viewpromo/viewpromo.component';
// import { ViewupdaterfpComponent } from './viewupdaterfp/viewupdaterfp.component';
// import { ViewnewrfpComponent } from './viewnewrfp/viewnewrfp.component'; 
 
@NgModule({
  exports: [
    // MaterialModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    FormsModule,
    MatFormFieldModule
  ],
  // declarations: [ViewupdaterfpComponent],
  // declarations: [ViewnewrfpComponent],

  
})
export class MaterialModule { }
  @NgModule({

  declarations: [
    AppComponent,
    HeaderComponent,
    CommonComponent,
    HomeComponent,
    SidebarComponent,
    SidebarViewComponent, 
    // ViewuserComponent
    
     
       
    
  ],
  imports: [
    BrowserModule /* or CommonModule */, 
   
     ReactiveFormsModule,
     MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    BrowserTransferStateModule,
    BrowserAnimationsModule,
  ],
  providers: [HomeService, AuthGuard, userService, PagerService],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
