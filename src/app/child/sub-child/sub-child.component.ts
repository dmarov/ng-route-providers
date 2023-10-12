import { Component } from '@angular/core';
import { RouteService } from 'src/app/shared/route.service';

@Component({
  selector: 'app-sub-child',
  templateUrl: './sub-child.component.html',
  styleUrls: ['./sub-child.component.scss']
})
export class SubChildComponent {
  name: string;

  constructor(
    private readonly service: RouteService,
  ) {
    this.name = this.service.getName();
  }
}
