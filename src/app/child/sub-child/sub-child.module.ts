import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { SubChildComponent } from './sub-child.component';



@NgModule({
  declarations: [
    SubChildComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
  ],
  exports: [
    SubChildComponent
  ],
})
export class SubChildModule { }
