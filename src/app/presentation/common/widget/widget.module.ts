import { NgModule } from '@angular/core';
import { WidgetComponent } from './widget.component';
import { CdkDrag, CdkDragHandle } from '@angular/cdk/drag-drop';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [WidgetComponent],
  imports: [CdkDrag, CdkDragHandle, TranslateModule.forChild()],
  exports: [WidgetComponent],
})
export class WidgetModule {}
