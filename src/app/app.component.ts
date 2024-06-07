import {
  ChangeDetectorRef,
  Component,
  DestroyRef,
  OnInit,
  inject,
} from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TitleService } from './presentation/services/title.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FooterComponent } from './presentation/common/footer/footer.component';
import { NavComponent } from './presentation/common/nav/nav.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [NavComponent, FooterComponent, TranslateModule, RouterModule],
})
export class AppComponent implements OnInit {
  public title: string = 'mia coupland';
  public projects: boolean = false;
  public contact: boolean = false;
  public bio: boolean = false;

  private _destroyRef = inject(DestroyRef);

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
      .pipe(takeUntilDestroyed(this._destroyRef))
      .subscribe((title) => {
        this.title = title;
        this.cdRef.detectChanges();
      });
  }

  public showProjects(s: boolean): void {
    this.projects = s;
  }

  public showContact(s: boolean): void {
    this.contact = s;
  }

  public showBio(s: boolean): void {
    this.bio = s;
  }
}
