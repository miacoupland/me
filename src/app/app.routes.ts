import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./presentation/common/landing/landing.component').then(c => c.LandingComponent),
    data: {
      pageTitle: 'Home',
    },
  },
  {
    path: 'about',
    loadComponent: () => import('./presentation/bio/bio.component').then(c => c.BioComponent),
    data: {
      pageTitle: 'About',
    },
  },
  {
    path: 'contact',
    loadComponent: () => import('./presentation/contact/contact.component').then(c => c.ContactComponent),
    data: {
      pageTitle: 'Contact',
    },
  },
  {
    path: 'projects',
    loadComponent: () => import('./presentation/projects/projects.component').then(c => c.ProjectsComponent),
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
    loadComponent: () => import('./presentation/common/page-not-found/page-not-found.component').then(c => c.PageNotFoundComponent)
  },
];
