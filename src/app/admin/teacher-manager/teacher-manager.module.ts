import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherManagerRoutingModule } from './teacher-manager-routing.module';
import { TeacherManagerComponent } from './teacher-manager.component';


@NgModule({
  declarations: [
    TeacherManagerComponent
  ],
  imports: [
    CommonModule,
    TeacherManagerRoutingModule
  ]
})
export class TeacherManagerModule { }
