import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router' ;
import { OverviewComponent } from '@app/home/cases/overview/overview.component';

const routes: Routes = [
  {
    path: '',
    component: OverviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CasesRoutingModule {}
