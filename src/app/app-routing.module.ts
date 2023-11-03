import { NgModule } from '@angular/core';
import { RouterModule, ExtraOptions } from '@angular/router';
import {Routes} from "@angular/router";
import {AuthGuardService} from "./@core/services/auth-guard-service.guard";
import {LoginComponent} from "./@shared/components/login/login.component";
import {RegisterComponent} from "./@shared/components/register/register.component";

export const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canActivate: [AuthGuardService],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: '',
    redirectTo: 'admin',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'pages',
  },
];



const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
