import { computed, Injectable, signal } from '@angular/core';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private _selectedItems = signal<Item[]>([]);
  //modo lectura 
  readonly selectedItems = computed(() => this._selectedItems());
  readonly now = signal(Date.now());
  constructor() { 
    console.log(this._selectedItems());
    setInterval(() => this.now.set(Date.now()), 1000); // Cada segundo se actualiza
  }
  readonly anomalies = computed(() =>
    this.selectedItems().filter(i => i.accion === 'Anomalía')
  );
  readonly workItems = computed(() =>
    this.selectedItems().filter(i =>
      ['Revisar','Corregir','Cambiar'].includes(i.accion)
    )
  );
  addItemSelect(item: Item){
    let current= this.selectedItems()
    if (!current.some(x => x.id === item.id)) {
      this._selectedItems.set([...current, item]);
      console.log(this._selectedItems());
    } else {
      throw new Error('Item ya seleccionado');
    }
}
  deleteItemSelect(item: Item){
    this._selectedItems.update(items => items.filter(x => x.id !== item.id) )
  }
  isSelected(item: Item): boolean {
    return this._selectedItems().some(x => x.id === item.id);
  }
  startTimerItem(item: Item){
    const ahora= new Date();
    this._selectedItems.update(list=>
      list.map(x =>
        x.id == item.id  ? { ...x, trabajandoDesde: ahora } : x
      )
    )
  }
  stopTimerItem(item:Item){
    const ahora = new Date();
    const inicio= item.trabajandoDesde ? new Date(item.trabajandoDesde) : null;
    let acumulado = item.tiempoTrabajado ?? 0;

    if (inicio) {
      const deltaSegs = Math.floor((ahora.getTime() - inicio.getTime()) / 1000);
      acumulado += deltaSegs;
    }

    const actualizado: Item = {
      ...item,
      tiempoTrabajado: acumulado,
      trabajandoDesde: null
    };

    // Actualiza la señal
    this._selectedItems.update(list =>
      list.map(x => (x.id === item.id ? actualizado : x))
    );
    
  }
}
