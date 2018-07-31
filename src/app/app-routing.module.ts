import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@app/modules/core/guards/auth.guard';



const routes: Routes = [
  {
    path: '',
    loadChildren: '@app/home/home.module#HomeModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: '@app/login/login.module#LoginModule'
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
