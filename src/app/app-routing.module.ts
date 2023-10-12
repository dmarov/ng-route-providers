import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteService } from './shared/route.service';
import { RouteAService } from './shared/route-a.service';
import { RouteBService } from './shared/route-b.service';

const routes: Routes = [
  {
    path: 'route-a',
    loadChildren: () => import('./child/child.module').then(m => m.ChildModule),
    providers: [
      {
        provide: RouteService,
        useClass: RouteAService,
      }
    ],
  },
  {
    path: 'route-b',
    loadChildren: () => import('./child/child.module').then(m => m.ChildModule),
    providers: [
      {
        provide: RouteService,
        useClass: RouteBService,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
