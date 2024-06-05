import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleComponent } from './presentation/article/article.component';
import { NavComponent } from './presentation/common/nav/nav.component';
import { FooterComponent } from './presentation/common/footer/footer.component';
import { BioComponent } from './presentation/bio/bio.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ProjectsComponent } from './presentation/projects/projects.component';
import { ContactComponent } from './presentation/contact/contact.component';
import { PageNotFoundComponent } from './presentation/common/page-not-found/page-not-found.component';
import { ProjectTileComponent } from './presentation/projects/project-tile/project-tile/project-tile.component';
import { LandingComponent } from './presentation/common/landing/landing.component';

export function createTranslateLoader(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    BioComponent,
    ContactComponent,
    FooterComponent,
    LandingComponent,
    NavComponent,
    PageNotFoundComponent,
    ProjectsComponent,
    ProjectTileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [TranslateModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
