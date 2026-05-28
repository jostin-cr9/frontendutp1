import { Routes } from '@angular/router';

import { Inicio } from './pages/inicio/inicio';
import { Tareas } from './pages/tareas/tareas';
import { NuevaTarea } from './pages/nueva-tarea/nueva-tarea';

export const routes: Routes = [
  { path: '', component: Inicio},
  { path: 'tareas', component: Tareas },
  { path: 'nueva-tarea', component: NuevaTarea }
];