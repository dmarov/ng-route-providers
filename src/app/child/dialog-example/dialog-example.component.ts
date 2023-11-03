import { Component } from '@angular/core';
import { RouteService } from 'src/app/shared/route.service';

@Component({
  selector: 'app-dialog-example',
  templateUrl: './dialog-example.component.html',
  styleUrls: ['./dialog-example.component.scss']
})
export class DialogExampleComponent {
  name: string;

  constructor(
    private readonly service: RouteService,
  ) {
    this.name = this.service.getName();
  }
}
