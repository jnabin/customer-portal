import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    NavBarComponent,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
