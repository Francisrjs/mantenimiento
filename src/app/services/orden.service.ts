import { Injectable } from '@angular/core';
import { OrdenesMantenimiento } from '../pages/ordenes/ordenes.mock';
import { Orden } from '../models/orden.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ordenService {
  private ordenes: Orden[] = [...OrdenesMantenimiento]; // Copiamos los datos del mock
  
  constructor() {}

  // 🟢 GET: Obtener todas las órdenes
  getAllOrdenes(): Observable<Orden[]> {
    return of(this.ordenes);
  }

  // 🟢 GET: Obtener una orden por ID
  getOrdenById(id: number): Observable<Orden | undefined> {
    const orden = this.ordenes.find(o => o.id === id);
    return of(orden);
  }

  // 🟢 GET: Obtener orden por patente
  getOrdenByPatente(patente: string): Observable<Orden[]> {
    const ordenes = this.ordenes.filter(o => o.patente === patente || o.patenteSemi1 === patente || o.patenteSemi2 === patente);
    return of(ordenes);
  }

  // 🟡 POST: Crear nueva orden
  createOrden(orden: Orden): Observable<Orden> {
    orden.id = this.generarNuevoId();
    this.ordenes.push(orden);
    return of(orden);
  }

  // 🟠 PUT: Actualizar una orden existente
  updateOrden(ordenActualizada: Orden): Observable<Orden | undefined> {
    const index = this.ordenes.findIndex(o => o.id === ordenActualizada.id);
    if (index > -1) {
      this.ordenes[index] = ordenActualizada;
      return of(this.ordenes[index]);
    }
    return of(undefined);
  }

  // 🔴 DELETE: Eliminar orden por ID
  deleteOrden(id: number): Observable<boolean> {
    const index = this.ordenes.findIndex(o => o.id === id);
    if (index > -1) {
      this.ordenes.splice(index, 1);
      return of(true);
    }
    return of(false);
  }

  // ✅ Método auxiliar para generar IDs únicos
  private generarNuevoId(): number {
    const ids = this.ordenes.map(o => o.id);
    return Math.max(...ids) + 1;
  }

  
}
