import { Component, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Observable, of } from 'rxjs';
import { Project } from '../common/entities/project-entity';
import config from './../../../assets/config.json';
import { TitleService } from '../services/title.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  public tileData: Observable<Project[]> = of(Object.values(config.projects));

  public project: Project | null = null;

  constructor(private titleService: TitleService) {
    this.tileData.pipe(takeUntilDestroyed()).subscribe((value) => {
      return [value[0], value[1]];
    });
  }

  public ngOnInit(): void {
    this.titleService.setTitle('common.projects');
  }

  public showProject(project: Project): void {
    this.project = project;
  }
}
