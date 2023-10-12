import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubChildComponent } from './sub-child.component';



@NgModule({
  declarations: [
    SubChildComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SubChildComponent
  ],
})
export class SubChildModule { }
