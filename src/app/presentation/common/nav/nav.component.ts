import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  standalone: true,
  imports: [TranslateModule, RouterModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavComponent {
  public title: string = 'mia coupland';

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'eo']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang?.match(/en|eo/) ? browserLang : 'en');
  }

  public showHamburger(): void {
    var x = document.getElementById('nav');
    if (x != null) {
      if (x.style.display === 'block') {
        x.style.display = 'none';
      } else {
        x.style.display = 'block';
      }
    }
  }
}
