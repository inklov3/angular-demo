import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentManagerComponent } from './student-manager.component';

const routes: Routes = [{ path: '', component: StudentManagerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentManagerRoutingModule { }
