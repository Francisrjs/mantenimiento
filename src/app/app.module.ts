import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdenesComponent } from './pages/ordenes/ordenes.component';
import { OrdenesDetailComponent } from './pages/ordenes-detail/ordenes-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrdenesAddComponent } from './pages/ordenes-add/ordenes-add.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { OrdenesViewTableComponent } from './pages/ordenes-view-table/ordenes-view-table.component';
import { ControlSidebarComponent } from './pages/core/control-sidebar/control-sidebar.component';
import { faLaughWink, faTachometerAlt, faCog, faWrench, faFolder, faChartArea, faTable } from '@fortawesome/free-solid-svg-icons';;
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

// Angular Material Modules
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ItemOrdenesComponent } from './plan/item-ordenes/item-ordenes.component';
import { ItemsContainerComponent } from './plan/items-container/items-container.component';
import { ItemsComponent } from './plan/items/items.component';



@NgModule({
  declarations: [
    AppComponent,
    OrdenesComponent,
    OrdenesDetailComponent,
    OrdenesAddComponent,
    OrdenesViewTableComponent,
    ControlSidebarComponent,
    MainLayoutComponent,
    ItemsComponent,
    ItemOrdenesComponent,
    ItemsContainerComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    FontAwesomeModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] 
})
export class AppModule { 
  constructor(library: FaIconLibrary) {
    library.addIcons(faLaughWink, faTachometerAlt, faCog, faWrench, faFolder, faChartArea, faTable);
  }
}
