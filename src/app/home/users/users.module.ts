import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { OverviewComponent } from './overview/overview.component';
import { SharedModule } from '@app/modules/shared/shared.module';
import { GoProCoreModule } from '@app/home/goprocore/goprocore.module';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
    GoProCoreModule
  ],
  declarations: [OverviewComponent]
})
export class UsersModule { }
