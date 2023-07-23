import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export enum TABS {
  ANGULAR = 'Angular',
  DESIGN_PATTERNS = 'Desighn Patterns',
}

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/welcome' },
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
