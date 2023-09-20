import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { BioComponent } from './presentation/bio/bio.component';
import { PageNotFoundComponent } from './presentation/common/page-not-found/page-not-found.component';
import { ContactComponent } from './presentation/contact/contact.component';
import { ProjectsComponent } from './presentation/projects/projects.component';
import { LandingComponent } from './presentation/common/landing/landing.component';

const routes: Routes = [
  {
    path: 'home',
    component: LandingComponent,
    data: {
      pageTitle: 'Home',
    },
  },
  {
    path: 'about',
    component: BioComponent,
    data: {
      pageTitle: 'About',
    },
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: {
      pageTitle: 'Contact',
    },
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    data: {
      pageTitle: 'Projects',
    },
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
