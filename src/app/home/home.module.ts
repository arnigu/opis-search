import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeNavComponent } from './home-nav/home-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule,
         MatListModule, MatFormFieldModule, MatInputModule
       } from '@angular/material';
import { SharedModule } from '@app/modules/shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    LayoutModule,
    SharedModule
  ],
  declarations: [HomeComponent, HomeNavComponent]
})
export class HomeModule { }
