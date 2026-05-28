import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TareaService } from '../../services/tarea.service';
import { Tarea } from '../../models/tarea';

@Component({
  selector: 'app-tareas',
  standalone: true,
  imports: [CommonModule], // 👈 ESTO ES LO QUE TE FALTA
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
    this.service.listar().subscribe(data => {
      this.tareas = data;
    });
  }

  eliminar(id: number) {
    this.service.eliminar(id).subscribe(() => {
      this.mensaje = 'Tarea eliminada correctamente';
      this.listar();
    });
  }
}