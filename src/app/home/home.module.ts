import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule } from '@angular/router';
import {HomeComponent} from './home.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// import { Routes, RouterModule } from '@angular/router';
// import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule, MatFormFieldModule, MatSlideToggleModule, MatIconModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { Http, HttpModule } from '@angular/http';
// import {MaterialModule} from '../app.module';


const MainpageRoutes: Routes = [ 
 { path: '', redirectTo: 'home', pathMatch: 'full' },  
{ path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [
    CommonModule,
    CommonModule,
    // MaterialModule,
    FormsModule, ReactiveFormsModule,
    // ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    HttpModule,
    MatSlideToggleModule,
  
    HttpClientModule,
    RouterModule.forChild(MainpageRoutes),
 
   
    
     
    
    ,
  ],
  declarations: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class HomeModule { }
