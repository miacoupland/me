import { ChangeDetectionStrategy, Component, OnChanges, Signal, input } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Project } from 'src/app/presentation/common/entities/project-entity';

@Component({
  selector: 'app-project-tile',
  templateUrl: './project-tile.component.html',
  styleUrls: ['./project-tile.component.sass'],
  standalone: true,
  imports: [TranslateModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectTileComponent {
  public tileData: Signal<Project> = input<Project>();

  constructor() {}
}
