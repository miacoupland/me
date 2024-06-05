import { Component, OnInit, signal } from '@angular/core';
import config from './../../../assets/config.json';
import { TitleService } from '../services/title.service';
import { TranslateModule } from '@ngx-translate/core';
import { ProjectTileComponent } from './project-tile/project-tile/project-tile.component';
import { Project } from '../common/entities/project-entity';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  standalone: true,
  imports: [TranslateModule, ProjectTileComponent],
})
export class ProjectsComponent implements OnInit {
  public tileData = signal<Project[]>([]);

  constructor(private titleService: TitleService) {
    this.tileData.set(Object.values(config.projects));
  }

  ngOnInit(): void {
    this.titleService.setTitle('common.projects');
  }
}
