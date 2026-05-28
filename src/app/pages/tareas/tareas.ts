import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TareaService } from '../../services/tarea.service';
import { Tarea } from '../../models/tarea';

@Component({
  selector: 'app-tareas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tareas.html'
})
export class Tareas {

  tareas: Tarea[] = [];
  mensaje: string = '';
  hoy = new Date();

  constructor(private service: TareaService) {
    this.listar();
  }
listar() {
  this.tareas = [
    {
      id: 1,
      titulo: 'CRUD Angular',
      curso: 'Programación Web',
      fechaEntrega: '2026-05-30',
      estado: 'pendiente',
      prioridad: 'alta'
    },
    {
      id: 2,
      titulo: 'Exposición Redes',
      curso: 'Redes',
      fechaEntrega: '2026-06-01',
      estado: 'en progreso',
      prioridad: 'media'
    }
  ];
}

  eliminar(id: number) {
    this.service.eliminar(id).subscribe(() => {
      this.mensaje = 'Tarea eliminada correctamente';
      this.listar();
    });
  }

  // ✅ ESTA ES LA QUE TE FALTA
  esVencida(fecha: string): boolean {
    return new Date(fecha) < this.hoy;
  }
}