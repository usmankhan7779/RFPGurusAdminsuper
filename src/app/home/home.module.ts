import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule } from '@angular/router';
import {HomeComponent} from './home.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// import { Routes, RouterModule } from '@angular/router';
// import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { Http, HttpModule } from '@angular/http';
import { MaterialModule } from '../app.module';
 


const MainpageRoutes: Routes = [ 
 { path: '', redirectTo: 'home', pathMatch: 'full' },  
{ path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [
    CommonModule,
    
    MaterialModule,
    FormsModule, 
    ReactiveFormsModule,
    // ReactiveFormsModule,
     
  
    HttpClientModule,
    RouterModule.forChild(MainpageRoutes),
 

    
     
    
    
  ],
  declarations: [],
  
})
export class HomeModule { }
