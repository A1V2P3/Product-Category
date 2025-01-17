import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from "primeng/dialog";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AddEditProductComponent } from './add-edit-product.component';
import { ButtonModule } from "primeng/button";
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from "primeng/inputtext";
import { InputNumberModule } from "primeng/inputnumber";



@NgModule({
  declarations: [
    AddEditProductComponent
  ],
  imports: [
    CommonModule,
    DialogModule,
    BrowserAnimationsModule,
    ButtonModule,
    ReactiveFormsModule,
    InputTextModule,
    InputNumberModule,
   
  ],

  exports: [AddEditProductComponent]
})
export class AddEditProductModule { }
