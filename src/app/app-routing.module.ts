import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteService } from './shared/route.service';
import { RouteAService } from './shared/route-a.service';
import { RouteBService } from './shared/route-b.service';
import { ChildModule } from './child/child.module';

const routes: Routes = [
  {
    path: 'route-a',
    loadChildren: () => ChildModule,
    providers: [
      {
        provide: RouteService,
        useClass: RouteAService,
      }
    ],
  },
  {
    path: 'route-b',
    loadChildren: () => ChildModule,
    providers: [
      {
        provide: RouteService,
        useClass: RouteBService,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ChildModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
