import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from '@app/home/admin/guidance/overview/overview.component';
import { DetailsComponent } from '@app/home/admin/guidance/details/details.component';

const routes: Routes = [{
  path: '',
  component: OverviewComponent
}, {
  path: ':id',
  component: DetailsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuidanceRoutingModule { }
