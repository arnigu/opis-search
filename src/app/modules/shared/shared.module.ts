import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatToolbarModule,
  MatExpansionModule,
  MatListModule,
  MatMenuModule, MatInputModule, MatSortModule, MatDialogModule, MatOptionModule, MatSelectModule, MatTabsModule,
  MatCardModule,
  MatPaginatorModule,
  MatProgressSpinnerModule
} from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { CdkTableModule } from '@angular/cdk/table';
import { MatTreeModule } from '@angular/material/tree';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatExpansionModule,
    MatListModule,
    MatTableModule,
    MatSortModule,
    CdkTableModule,
    MatMenuModule,
    FormsModule,
    MatInputModule,
    OverlayModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatOptionModule,
    MatTabsModule,
    MatTreeModule,
    MatCardModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatAutocompleteModule
  ],
  declarations: [],
  exports: [
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatExpansionModule,
    MatListModule,
    MatTableModule,
    MatSortModule,
    CdkTableModule,
    MatMenuModule,
    FormsModule,
    MatInputModule,
    OverlayModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatOptionModule,
    MatTabsModule,
    MatTreeModule,
    MatCardModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatAutocompleteModule
  ]
})
export class SharedModule {
}
