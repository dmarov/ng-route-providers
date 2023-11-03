import { Component } from '@angular/core';
import { RouteService } from '../shared/route.service';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  name: string;

  constructor(
    private readonly service: RouteService,
    private readonly dialog: MatDialog,
  ) {
    this.name = this.service.getName();
  }

  openDialog(): void {
    this.dialog.open(DialogExampleComponent, {
      width: '250px',
    });
  }
}
