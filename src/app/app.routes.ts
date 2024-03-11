import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./componentes/equipo/equipo.component')
  },
  {
    path: 'nuevo',
    loadComponent: () => import('./componentes/equiposform/equiposform.component')
  },
  {
    path: ':serial/editar',
    loadComponent: () => import('./componentes/equiposform/equiposform.component')
  }
];
