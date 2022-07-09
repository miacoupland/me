import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ArticleComponent } from './presentation/article/article.component';
import { BioComponent } from './presentation/bio/bio.component';
import { PageNotFoundComponent } from './presentation/common/page-not-found/page-not-found.component';
import { ContactComponent } from './presentation/contact/contact.component';
import { ProjectsComponent } from './presentation/projects/projects.component';

const routes: Routes = [
  {
    path: 'Home',
    component: AppComponent
  },
  {
    path: 'About',
    component: BioComponent,
    data: {
      pageTitle: 'About',
    },
  },
  {
    path: 'Blog',
    component: ArticleComponent,
    data: {
      pageTitle: 'Blog',
    },
  },
  {
    path: 'Contact',
    component: ContactComponent,
    data: {
      pageTitle: 'Contact',
    },
  },
  {
    path: 'Projects',
    component: ProjectsComponent,
    data: {
      pageTitle: 'Projects',
    },
  },
  {
    path: '',
    redirectTo: 'Home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
