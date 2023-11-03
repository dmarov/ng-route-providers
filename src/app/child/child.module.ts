import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './child.component';
import { ChildRoutingModule } from './child-routing.module';
import { SubChildModule } from './sub-child/sub-child.module';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';

@NgModule({
  declarations: [
    ChildComponent,
    DialogExampleComponent
  ],
  imports: [
    CommonModule,
    ChildRoutingModule,
    SubChildModule,
    MatDialogModule,
  ],
})
export class ChildModule { }
