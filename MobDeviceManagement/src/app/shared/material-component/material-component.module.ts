import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatButtonModule,
  MatSidenavModule,
  MatCheckboxModule,
  MatRadioModule,
  MatDatepickerModule,
  MatListModule,
  MatToolbarModule,
  MatIconModule,
  MatTableModule,
  MatCardModule,
  MatSortModule,
  MatDialogModule,
  MatInputModule,
  MatProgressSpinnerModule
} from "@angular/material";
import { LayoutModule } from "@angular/cdk/layout";
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDatepickerModule,
    LayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatCardModule,
    MatSortModule,
    MatDialogModule,
    MatInputModule,
    MatProgressSpinnerModule
  ],
  exports: [
    CommonModule,
    MatButtonModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDatepickerModule,
    LayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatCardModule,
    MatSortModule,
    MatDialogModule,
    MatInputModule,
    MatProgressSpinnerModule
  ]
})
export class MaterialComponentModule {}
