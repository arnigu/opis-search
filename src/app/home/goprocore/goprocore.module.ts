import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/modules/shared/shared.module';

import { ViewComponent } from './view/view.component';
import { ViewSearchComponent } from './view/viewsearch/viewsearch.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [ViewComponent, ViewSearchComponent],
  exports: [ViewComponent, ViewSearchComponent]
})
export class GoProCoreModule { }
