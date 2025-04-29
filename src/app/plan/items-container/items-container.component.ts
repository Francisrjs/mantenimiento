import { Component, HostListener } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { FAICONS } from 'src/app/pages/core/fa-icons';

@Component({
  selector: 'app-items-container',
  templateUrl: './items-container.component.html',
  styleUrls: ['./items-container.component.css']
})
export class ItemsContainerComponent {
  selectedItems: Item[] = []; 
  icon = FAICONS;
  addingItem: boolean = false;

  addItem(item: Item): void {
    if (!this.selectedItems.some(x => x.id === item.id)) {
      this.selectedItems = [...this.selectedItems, item]; 
    }
  }

  newItem() {
    this.addingItem = true;
  }

  @HostListener('document:keydown.escape', ['$event'])
  handleEscapeKey(event: KeyboardEvent) {
    if (this.addingItem) {
      this.closeModal();
    }
  }

  handleItemSelect(item: Item) {
    this.addItem(item);
    this.closeModal();
  }

  // Cerrar al hacer click fuera del modal
  closeModal() {
    this.addingItem = false;
  }
}

