import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Project } from 'src/app/presentation/common/entities/project-entity';

@Component({
  selector: 'app-project-tile',
  templateUrl: './project-tile.component.html',
  styleUrls: ['./project-tile.component.sass'],
})
export class ProjectTileComponent implements OnInit {
  @Input() public tileData: any;
  public key: string = '';
  public name: string = '';
  public imageSrc: string = '';
  public githubLink: string = '';

  constructor() {}

  ngOnInit() {
    this.key = this.tileData.key;
    this.name = this.tileData.name;
    this.imageSrc = this.tileData.imageSrc;
    this.githubLink = this.tileData.githubLink;
  }
}
