import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public title: string = 'Mia Coupland';
  public starsClass: string;
  public cloudsClass: string;

  constructor(private translate: TranslateService) {
    this.starsClass = '';
    this.cloudsClass = '';
    translate.addLangs(['en', 'eo']);
    translate.setDefaultLang('en');
    translate.use('en');
  }

  ngOnInit(): void {
    let clouds = document.getElementsByClassName('clouds')[0];
    let stars = document.getElementsByClassName('stars')[0];
    let twinkling = document.getElementsByClassName('twinkling')[0];
    var currentTime = new Date().getHours();
    if (0 <= currentTime && currentTime < 5) {
      clouds.classList.add('clouds3');
      stars.classList.add('stars-nighttime');
      twinkling.classList.remove('hidden');
    }
    if (5 <= currentTime && currentTime < 16) {
      clouds.classList.add('clouds4');
    }
    if (16 <= currentTime && currentTime < 19) {
      stars.classList.add('stars-afternoon');
      clouds.classList.add('clouds3');
      twinkling.classList.remove('hidden');
    }
    if (19 <= currentTime && currentTime <= 24) {
      clouds.classList.add('clouds3');
      stars.classList.add('stars-nighttime');
      twinkling.classList.remove('hidden');
    }
  }
}
