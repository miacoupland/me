import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TitleService } from './presentation/services/title.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  public title: string = 'mia coupland';

  private isDestroyed: Subject<boolean> = new Subject<boolean>();

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

  public ngOnDestroy(): void {
    this.isDestroyed.next(true);
    this.isDestroyed.unsubscribe();
  }

  ngOnInit(): void {
    this.titleService.title$
      .pipe(takeUntil(this.isDestroyed))
      .subscribe((title) => {
        this.title = title;
        this.cdRef.detectChanges();
      });
  }
}
