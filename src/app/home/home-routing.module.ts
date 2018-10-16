import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '@app/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'documents',
        loadChildren: './documents/documents.module#DocumentsModule'
      },
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
      },
      {
        path: 'lists',
        loadChildren: './lists/lists.module#ListsModule'
      },
      {
        path: 'categories',
        loadChildren: './admin/categories/categories.module#CategoriesModule'
      },
      {
        path: 'guidance',
        loadChildren: './admin/guidance/guidance.module#GuidanceModule'
       },
      { path: '', redirectTo: '/cases', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
