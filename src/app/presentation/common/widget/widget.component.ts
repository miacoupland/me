import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss'],
})
export class WidgetComponent {
  @Input() public title!: string;
  @Input() public content!: string;
  @Output() public closeChange: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  constructor() {}

  public closeWidget(): void {
    this.closeChange.next(false);
  }
}
