import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CasesRoutingModule } from './cases-routing.module';
import { OverviewComponent } from './overview/overview.component';
import { SharedModule } from '@app/modules/shared/shared.module';
import { GoProCoreModule } from '@app/home/goprocore/goprocore.module';

@NgModule({
  imports: [
    CommonModule,
    CasesRoutingModule,
    SharedModule,
    GoProCoreModule
  ],
  declarations: [OverviewComponent]
})
export class CasesModule { }
