import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { Project } from '../common/entities/project-entity';
import config from './../../../assets/config.json';
import { TitleService } from '../services/title.service';
import { TranslateModule } from '@ngx-translate/core';
import { ProjectTileComponent } from './project-tile/project-tile/project-tile.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  standalone: true,
  imports: [TranslateModule, ProjectTileComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent implements OnInit {
  public tileData = signal<Project[]>([]);

  public project!: Project;

  constructor(private titleService: TitleService) {
    this.tileData.set(Object.values(config.projects));
  }

  public ngOnInit(): void {
    this.titleService.setTitle('common.projects');
  }

  public showProject(project: Project): void {
    this.project = project;
  }
}
