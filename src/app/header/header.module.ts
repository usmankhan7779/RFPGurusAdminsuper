 
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 
import { HeaderComponent } from './header.component';
import { FormsModule } from '@angular/forms';
 
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [HeaderComponent],
  providers: [
    
    
  ]
})
export class HeaderModule { }
