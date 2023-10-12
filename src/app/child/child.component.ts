import { Component } from '@angular/core';
import { RouteService } from '../shared/route.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  name: string;

  constructor(
    private readonly service: RouteService
  ) {
    this.name = this.service.getName();
  }
}
