import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export enum TABS {
  ANGULAR = 'Angular',
  DESIGN_PATTERNS = 'Desighn Patterns',
  CSS = 'CSS',
}

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  {
    path: 'settings',
    loadComponent: () =>
      import('./core/settings/settings.component').then(
        (mod) => mod.SettingsComponent
      ),
  },
  {
    path: 'signals',
    loadComponent: () =>
      import('./components/angular/signals/signals.component').then(
        (mod) => mod.SignalsComponent
      ),
    data: {
      tab: TABS.ANGULAR,
      title: 'Signals',
    },
  },
  {
    path: 'singleton',
    loadComponent: () =>
      import('./components/design-patterns/singleton/singleton.component').then(
        (mod) => mod.SingletonComponent
      ),
    data: {
      tab: TABS.DESIGN_PATTERNS,
      title: 'Singleton',
    },
  },
  {
    path: 'flex',
    loadComponent: () =>
      import('./components/css/flex/flex.component').then(
        (mod) => mod.FlexComponent
      ),
    data: {
      tab: TABS.CSS,
      title: 'Flex',
    },
  },
  {
    path: 'natours',
    loadComponent: () =>
      import('./components/css/natours/natours.component').then(
        (mod) => mod.NatoursComponent
      ),
    data: {
      tab: TABS.CSS,
      title: 'Natours',
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
