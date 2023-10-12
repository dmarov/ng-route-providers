import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './child.component';
import { ChildRoutingModule } from './child-routing.module';
import { SubChildModule } from './sub-child/sub-child.module';

@NgModule({
  declarations: [
    ChildComponent
  ],
  imports: [
    CommonModule,
    ChildRoutingModule,
    SubChildModule
  ],
})
export class ChildModule { }
