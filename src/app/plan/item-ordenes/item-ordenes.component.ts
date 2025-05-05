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

  displayedColumns: string[] = ['nombre','accion','tipo','actions','tiempo'];
  dataSource = new MatTableDataSource<Item>([]);

  constructor(public itemService: ItemService){
    effect(()=>{
      this.dataSource.data= this.itemService.selectedItems();
    })
  }
  set items(value: Item[]) {
    this.dataSource.data = value || [];
  }

  /**
   * Casos para seleccionar y eliminar
   */
  toggleItemSelect(item: Item): void {
    if (this.itemService.isSelected(item)){
      this.itemService.deleteItemSelect(item);
    } else{
      this.itemService.addItemSelect(item);
    }
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
