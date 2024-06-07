import { Component, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TitleService } from './presentation/services/title.service';
import { FooterComponent } from './presentation/common/footer/footer.component';
import { NavComponent } from './presentation/common/nav/nav.component';
import { RouterModule } from '@angular/router';
import { WidgetComponent } from './presentation/common/widget/widget.component';
import { ProjectsComponent } from './presentation/projects/projects.component';
import { ContactComponent } from './presentation/contact/contact.component';
import { BioComponent } from './presentation/bio/bio.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    NavComponent,
    FooterComponent,
    TranslateModule,
    RouterModule,
    WidgetComponent,
    ProjectsComponent,
    ContactComponent,
    BioComponent,
  ],
})
export class AppComponent implements OnInit {
  public title: string = 'mia coupland';
  public projects: boolean = false;
  public contact: boolean = false;
  public bio: boolean = false;

  constructor(
    private translate: TranslateService,
    private titleService: TitleService
  ) {
    translate.addLangs(['en', 'eo']);
    translate.setDefaultLang('en');
    translate.use('en');
    this.titleService.setTitle('mia coupland');
  }

  ngOnInit(): void {
    this.title = this.titleService.title;
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
