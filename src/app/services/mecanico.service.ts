import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Mecanico } from '../models/mecanico.model';
import { Mecanicos } from '../pages/ordenes/mecanico.mockup';
@Injectable({
  providedIn: 'root'
})
export class mecanicoService {

  private mecanicos: Mecanico[]=[...Mecanicos]
  constructor() {}


  getAllMecanicos(): Observable<Mecanico[]> {
    return of(this.mecanicos);
  }
 /**
   * Obtiene un mecánico específico por su ID
   * @param id ID del mecánico a buscar
   * @returns Observable con el Mecanico o undefined si no se encuentra
   */
 getMecanicoById(id: number): Observable<Mecanico | undefined> {
  const mecanico = this.mecanicos.find(m => m.id === id);
  return of(mecanico);
}

/**
 * Obtiene varios mecánicos por sus IDs
 * @param ids Array de IDs de mecánicos
 * @returns Observable con array de Mecanico[] encontrados
 */
getMecanicosByIds(ids: number[]): Observable<Mecanico[]> {
  const mecanicosEncontrados = this.mecanicos.filter(m => ids.includes(m.id));
  return of(mecanicosEncontrados);
}
}
