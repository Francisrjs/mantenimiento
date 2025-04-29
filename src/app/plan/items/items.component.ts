import { Component, EventEmitter,OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { faIcons, faLaughWink, faMagnifyingGlass, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ITEMS } from 'src/app/mocks/items.mockup';
import { Item } from 'src/app/models/item.model';

import { elementAt } from 'rxjs';
import { FAICONS, getIconForTipo } from 'src/app/pages/core/fa-icons';


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
  @Output() itemsSelect = new EventEmitter<Item>();
  icons= FAICONS;
  getIcon=getIconForTipo;
  // Datos de tu tabla (puede cambiar según tu interfaz)
  displayedColumns = ['id','nombre','accion','tipo','detalle_item','actions'];
  dataSource = new MatTableDataSource<Item>(ITEMS);

  symbols: string[] = Array.from(new Set((this.dataSource.data as any[]).map(e => e.symbol)));
  selectedSymbols: string[] = [];
  filterValue = '';

  ngOnInit(): void {
    this.dataSource.filterPredicate = (data: any, filter: string) => {
      const [text, symbols] = filter.split('|');
      const matchesText = data.nombre.toLowerCase().includes(text) || data.detalle_item.toLowerCase().includes(text);
      let matchesSymbol = true;
      if (symbols) {
        const selected = symbols.split(',');
        matchesSymbol = selected.includes(data.symbol);
      }
      return matchesText && matchesSymbol;
    };
    this.applyCombinedFilter();
  }

  applyFilter(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.filterValue = input.value.trim().toLowerCase();
    this.applyCombinedFilter();
  }

  onSymbolsChange(): void {
    this.applyCombinedFilter();
  }

  private applyCombinedFilter(): void {
    const text = this.filterValue;
    const symbols = this.selectedSymbols.join(',');
    this.dataSource.filter = text + '|' + symbols;
  }
  onEdit(element: any) {
    console.log('Editar', element);
  }
  
  onDelete(element: any) {
    console.log('Eliminar', element);
  }
  
  
  onAdd(element: Item) {
    this.itemsSelect.emit(element)
  }
  
}