import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/modules/shared/shared.module';

import { ViewComponent } from './view/view.component';
import { ViewSearchComponent } from './view/viewsearch/viewsearch.component';
import { LookupComponent } from './lookup/lookup.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [ViewComponent, ViewSearchComponent, LookupComponent],
  exports: [ViewComponent, ViewSearchComponent, LookupComponent]
})
export class GoProCoreModule { }
