import { Component, Input } from '@angular/core';

@Component({
  selector: 'widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss'],
})
export class WidgetComponent {
  @Input() public title!: string;
  @Input() public content!: string;

  constructor() {}
}
