import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TeacherManagerComponent} from './teacher-manager.component';

const routes: Routes = [
    {path: '', component: TeacherManagerComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TeacherManagerRoutingModule {
}
