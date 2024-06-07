import { Component, Input, OutputEmitterRef, output } from '@angular/core';
import { CdkDrag, CdkDragHandle } from '@angular/cdk/drag-drop';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss'],
  standalone: true,
  imports: [CdkDrag, CdkDragHandle, TranslateModule],
})
export class WidgetComponent {
  @Input() public title!: string;
  @Input() public content!: string;
  public closeChange: OutputEmitterRef<boolean> = output<boolean>();

  constructor() {}

  public closeWidget(): void {
    this.closeChange.emit(false);
  }
}
