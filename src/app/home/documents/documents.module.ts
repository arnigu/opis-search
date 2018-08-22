import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentsRoutingModule } from '@app/home/documents/documents-routing.module';
import { OverviewComponent } from './overview/overview.component';
import { SharedModule } from '@app/modules/shared/shared.module';
import { GoProCoreModule } from '@app/home/goprocore/goprocore.module';

@NgModule({
  imports: [
    CommonModule,
    DocumentsRoutingModule,
    SharedModule,
    GoProCoreModule
  ],
  declarations: [OverviewComponent]
})
export class DocumentsModule { }
