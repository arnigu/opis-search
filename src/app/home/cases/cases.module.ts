import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CasesRoutingModule } from './cases-routing.module';
import { OverviewComponent } from './overview/overview.component';
import { SharedModule } from '@app/modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    CasesRoutingModule,
    SharedModule
  ],
  declarations: [OverviewComponent]
})
export class CasesModule { }
