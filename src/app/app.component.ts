import {
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TitleService } from './presentation/services/title.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public title: string = 'mia coupland';

  constructor(
    private translate: TranslateService,
    private titleService: TitleService,
    private cdRef: ChangeDetectorRef
  ) {
    translate.addLangs(['en', 'eo']);
    translate.setDefaultLang('en');
    translate.use('en');
    this.titleService.setTitle('mia coupland');
  }

  ngOnInit(): void {
    this.titleService.title$
      .pipe(takeUntilDestroyed())
      .subscribe((title) => {
        this.title = title;
        this.cdRef.detectChanges();
      });
  }
}
