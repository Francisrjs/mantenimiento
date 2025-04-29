import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Item } from 'src/app/models/item.model';
import { FAICONS, getIconForTipo } from 'src/app/pages/core/fa-icons';

@Component({
  selector: 'app-item-ordenes',
  templateUrl: './item-ordenes.component.html',
  styleUrls: ['./item-ordenes.component.css']
})
export class ItemOrdenesComponent {
  icons = FAICONS;
  getIcon = getIconForTipo;

  displayedColumns: string[] = ['nombre', 'accion', 'tipo', 'actions'];
  dataSource = new MatTableDataSource<Item>([]);

  // Usamos un setter para detectar cambios aunque sea la misma referencia
  @Input()
  set items(value: Item[]) {
    console.log('ItemOrdenesComponent received items:', value);
    // Asignamos datos al dataSource para refrescar la tabla
    this.dataSource.data = value || [];
  }

  /**
   * Botón eliminar: actualiza dataSource internamente
   */
  onDelete(element: Item): void {
    const updated = this.dataSource.data.filter(x => x.id !== element.id);
    this.dataSource.data = updated;
  }
}
