import { Component, HostListener, inject } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { FAICONS } from 'src/app/pages/core/fa-icons';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-items-container',
  templateUrl: './items-container.component.html',
  styleUrls: ['./items-container.component.css']
})
export class ItemsContainerComponent {
  private itemService: ItemService;
  selectedItems: Item[] = []; 
  icon = FAICONS;
  addingItem: boolean = false;
 
  constructor(itemService: ItemService){
    this.itemService= itemService;
  }
  newItem() {
    this.addingItem = true;
  }
  addItemSelect(item:Item){
    this.itemService.addItemSelect(item);
  }
  @HostListener('document:keydown.escape', ['$event'])
  handleEscapeKey(event: KeyboardEvent) {
    if (this.addingItem) {
      this.closeModal();
    }
  }

  handleItemSelect(item: Item) {
    this.addItemSelect(item);
    this.closeModal();
  }

  // Cerrar al hacer click fuera del modal
  closeModal() {
    this.addingItem = false;
  }
}

