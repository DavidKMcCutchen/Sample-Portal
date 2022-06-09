import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'sample-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  @Input() title: string | undefined;
  @Output() toggleSidenav = new EventEmitter();
}
