import { NgModule } from '@angular/core';

import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { MatMenuModule } from '@angular/material/menu';

const Material = [
  MatSelectModule,
  MatToolbarModule,
  MatButtonModule,
  MatProgressSpinnerModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatIconModule,
  MatSnackBarModule,
  MatProgressBarModule,
  MatMenuModule,
];

@NgModule({
  imports: [Material],
  exports: [Material],
})
export class MaterialModule {}
