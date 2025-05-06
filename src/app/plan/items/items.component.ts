import { Component, EventEmitter,Input,OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { faIcons, faLaughWink, faMagnifyingGlass, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ITEMS } from 'src/app/mocks/items.mockup';
import { Item } from 'src/app/models/item.model';

import { elementAt } from 'rxjs';
import { FAICONS, getIconForTipo } from 'src/app/pages/core/fa-icons';
import { ItemService } from 'src/app/services/item.service';


// Interfaz de ejemplo
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  icons= FAICONS;
  getIcon=getIconForTipo;

  @Input() actionFilters: String[]=[]; // Filter acciones
  @Input() textFilter = '';                  // opcional: texto de búsqueda
  // Datos de tu tabla (puede cambiar según tu interfaz)
  displayedColumns = ['id','nombre','accion','tipo','detalle_item','actions'];
  dataSource = new MatTableDataSource<Item>(ITEMS);

  constructor(public itemService: ItemService){}
  ngOnInit(): void {
    this.dataSource.filterPredicate = (data: any, filter: string) => {
      const { text, actions } = JSON.parse(filter) as {
        text: string;
        actions: string[];
      };
      const matchesText = data.nombre.toLowerCase().includes(text) || data.detalle_item.toLowerCase().includes(text); // Texto

      const matchesAction= actions.length === 0 || actions.includes(data.accion); // Accion

      return matchesText && matchesAction;
    };

    //filtro inicial
    this.applyCombinedFilter();
  }
  ngOnChanges(): void{
    //si cambia el input
    this.applyCombinedFilter();
  }

  applyCombinedFilter(): void {
    const filter = {
      text: this.textFilter.trim().toLowerCase(),
      actions: this.actionFilters
    };
    this.dataSource.filter = JSON.stringify(filter);
  }

  onEdit(element: any) {
    console.log('Editar', element);
  }
  
  onDelete(element: any) {
    console.log('Eliminar', element);
  }
  
  
  onAdd(item: Item) {
    this.itemService.addItemSelect(item);
  }
  
}