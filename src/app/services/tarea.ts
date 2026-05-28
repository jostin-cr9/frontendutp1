import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tarea } from '../models/tarea';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  private api = 'http://localhost:3000/tareas';

  constructor(private http: HttpClient) { }

  // LISTAR
  listar(): Observable<Tarea[]> {
    return this.http.get<Tarea[]>(this.api);
  }

  // REGISTRAR
  registrar(tarea: Tarea): Observable<Tarea> {
    return this.http.post<Tarea>(this.api, tarea);
  }

  // ELIMINAR
  eliminar(id: number): Observable<any> {
    return this.http.delete(`${this.api}/${id}`);
  }

}