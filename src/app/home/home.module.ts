import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule } from '@angular/router';
import {HomeComponent} from './home.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// import { Routes, RouterModule } from '@angular/router';
// import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule, MatFormFieldModule, MatSlideToggleModule, MatIconModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
 

const MainpageRoutes: Routes = [ 
 { path: '', redirectTo: 'home', pathMatch: 'full' },  
{ path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [
    CommonModule,
   
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    
    MatSlideToggleModule,
  
    HttpClientModule,
    RouterModule.forChild(MainpageRoutes),
 
   
    
     
    
    ,
  ],
  declarations: []
})
export class HomeModule { }
