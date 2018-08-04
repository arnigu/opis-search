import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '@app/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'cases',
        loadChildren: './cases/cases.module#CasesModule'
      },
      {
        path: 'clients',
        loadChildren: './clients/clients.module#ClientsModule'
      },
      {
        path: 'users',
        loadChildren: './users/users.module#UsersModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
