import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from "./admin.component";

export const routes: Routes = [
    {
        path: '',
        component: AdminComponent,
        children: [
            {
                path: 'teacher-manager',
                loadChildren: () => import('./teacher-manager/teacher-manager.module').then(m => m.TeacherManagerModule)
            },
            {
                path: 'student-manager',
                loadChildren: () => import('./student-manager/student-manager.module').then(m => m.StudentManagerModule)
            },
            {path: '', redirectTo: 'teacher-manager', pathMatch: 'full'},
            {path: '**', redirectTo: 'teacher-manager'},
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {
}
