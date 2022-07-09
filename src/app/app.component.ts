import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss',
    './presentation/common/styles/time-based/afternoon.scss',
  ],
})
export class AppComponent {
  public title: string = "Mia Coupland";

  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'eo']);
    translate.setDefaultLang('en');
    translate.use('en');

    this.getStyleSheet();
  }

  public getStyleSheet() {
    var currentTime = new Date().getHours();
    if (0 <= currentTime && currentTime < 5) {
      document.write(
        "<link rel='stylesheet' href='./common/styles/time-based/nighttime.css' type='text/css'>"
      );
    }
    if (5 <= currentTime && currentTime < 16) {
      document.write(
        "<link rel='stylesheet' href='./common/styles/time-based/morning.css' type='text/css'>"
      );
    }
    if (16 <= currentTime && currentTime < 19) {
      StyleSheet;
      document.write(
        "<link rel='stylesheet' href='./common/styles/time-based/afternoon.css' type='text/css'>"
      );
    }
    if (19 <= currentTime && currentTime <= 24) {
      document.write(
        "<link rel='stylesheet' href='./common/styles/time-based/nighttime.css' type='text/css'>"
      );
    }
  }
}