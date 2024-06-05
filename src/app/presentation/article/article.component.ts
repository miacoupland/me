import { Component, OnInit } from '@angular/core';
import { TitleService } from '../services/title.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  standalone: true,
})
export class ArticleComponent implements OnInit {

  constructor(private titleService: TitleService) { }

  ngOnInit(): void {
    this.titleService.setTitle('common.blog');
  }

}
