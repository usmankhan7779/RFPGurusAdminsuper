import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewpageComponent } from './viewpage.component';
import { NewProduct } from './viewpage.routing';

 
@NgModule({
  // ¢
    imports: [
        CommonModule,
       
        RouterModule.forChild(NewProduct),
        FormsModule,
        // MaterialModule,
        ReactiveFormsModule
    ],
    declarations: [
      ViewpageComponent,
    ],
    providers: [
     
  ],
    entryComponents: []
})

export class NewProductModule {}
