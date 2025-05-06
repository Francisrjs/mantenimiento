import { Component, effect, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Item } from 'src/app/models/item.model';
import { FAICONS, getIconForTipo } from 'src/app/pages/core/fa-icons';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item-ordenes',
  templateUrl: './item-ordenes.component.html',
  styleUrls: ['./item-ordenes.component.css']
})
export class ItemOrdenesComponent  {
  icons = FAICONS;
  getIcon = getIconForTipo;
  
  private _isWorkItem = true;
  displayedColumns: string[] = [];

  @Input()
  set isWorkItem(value: boolean) { //setter
    this._isWorkItem = value;
    this.displayedColumns = value
      ? ['nombre','accion','tipo','actions','tiempo','responsable']
      : ['nombre','accion','tipo','actions'];
  }
  get isWorkItem() { //getter
    return this._isWorkItem;
  }




  dataSource = new MatTableDataSource<Item>([]);

  constructor(public itemService: ItemService){
    effect(()=>{
        this.dataSource.data= (this.isWorkItem) ? this.itemService.workItems() :   this.itemService.anomalies()
    })
  }
  set items(value: Item[]) {
    this.dataSource.data = value || [];
  }

  /**
   * Casos para seleccionar y eliminar
   */
  addItemSelect(item: Item): void {
      this.itemService.addItemSelect(item);
  }
  startTimerItem(item:Item){
    this.itemService.startTimerItem(item);
  }
  stopTimerItem(item:Item){
    this.itemService.stopTimerItem(item);
  }
  calculateElapsed(item:Item){
    const now= this.itemService.now();
    const inicio= item.trabajandoDesde ? new Date(item.trabajandoDesde).getTime() : null;
    let total= item.tiempoTrabajado ?? 0
    if (inicio){
      total +=Math.floor((now-inicio)/1000)
    }
    return total;
  }
}
