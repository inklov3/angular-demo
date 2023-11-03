import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentManagerRoutingModule } from './student-manager-routing.module';
import { StudentManagerComponent } from './student-manager.component';


@NgModule({
  declarations: [
    StudentManagerComponent
  ],
  imports: [
    CommonModule,
    StudentManagerRoutingModule
  ]
})
export class StudentManagerModule { }
