import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { OrdenesComponent } from './pages/ordenes/ordenes.component';
import { OrdenesDetailComponent } from './pages/ordenes-detail/ordenes-detail.component';
import { OrdenesViewTableComponent } from './pages/ordenes-view-table/ordenes-view-table.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,   // Ahora todo pasa por el layout
    children: [
      { path: '', component: AppComponent },
      { path: 'ordenes', component: OrdenesComponent },
      { path: 'ordenes/:ordenId', component: OrdenesDetailComponent },
      { path: 'table', component: OrdenesViewTableComponent },
    ]
  },
  { path: '**', redirectTo: '' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
