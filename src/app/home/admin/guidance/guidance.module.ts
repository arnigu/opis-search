import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuidanceRoutingModule } from './guidance-routing.module';
import { OverviewComponent } from './overview/overview.component';
import { SharedModule } from '@app/modules/shared/shared.module';
import { GoProCoreModule } from '@app/home/goprocore/goprocore.module';
import { DetailsComponent } from './details/details.component';

@NgModule({
  imports: [
    CommonModule,
    GuidanceRoutingModule,
    SharedModule,
    GoProCoreModule
  ],
  declarations: [OverviewComponent, DetailsComponent]
})
export class GuidanceModule { }
