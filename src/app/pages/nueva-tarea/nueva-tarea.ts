import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TareaService } from '../../services/tarea.service';
import { CommonModule } from '@angular/common';
import { Tarea } from '../../models/tarea';
@Component({
  selector: 'app-nueva-tarea',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './nueva-tarea.html'
    
})
export class NuevaTarea {

  tarea: Tarea = {
    titulo: '',
    curso: '',
    fechaEntrega: '',
    estado: 'pendiente',
    prioridad: 'media'
  };
  mensaje = '';
  constructor(private service: TareaService) {}
  guardar() {
    this.service.registrar(this.tarea).subscribe({
      next: () => {
        this.mensaje = 'Tarea registrada correctamente';
        this.tarea = {
          titulo: '',
          curso: '',
          fechaEntrega: '',
          estado: 'pendiente',
          prioridad: 'media'
        };
      },
      error: () => {
        this.mensaje = 'Error al registrar tarea';
      }
    });
  }
}