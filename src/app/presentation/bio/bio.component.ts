import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TitleService } from '../services/title.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  standalone: true,
  imports: [TranslateModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BioComponent implements OnInit {
  constructor(private titleService: TitleService) {}

  ngOnInit(): void {
    this.titleService.setTitle('common.about');
  }
}
