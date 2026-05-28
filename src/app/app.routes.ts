import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/inicio/inicio').then(m => m.Inicio)
  },
  {
    path: 'tareas',
    loadComponent: () =>
      import('./pages/tareas/tareas').then(m => m.Tareas)
  },
  {
    path: 'nueva-tarea',
    loadComponent: () =>
      import('./pages/nuevatarea/nueva-tarea').then(m => m.NuevaTarea)
  }
];