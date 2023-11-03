import { Component } from '@angular/core';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { RouteService } from 'src/app/shared/route.service';
import { DialogExampleComponent } from '../dialog-example/dialog-example.component';

@Component({
  selector: 'app-sub-child',
  templateUrl: './sub-child.component.html',
  styleUrls: ['./sub-child.component.scss']
})
export class SubChildComponent {
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
