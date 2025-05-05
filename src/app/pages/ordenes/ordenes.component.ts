import { Component, OnInit } from '@angular/core';
import { faI, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Mecanico } from 'src/app/models/mecanico.model';
import { Orden } from 'src/app/models/orden.model';
import { mecanicoService } from 'src/app/services/mecanico.service';
import { ordenService } from 'src/app/services/orden.service';
import { FAICONS } from '../core/fa-icons';
@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.css']
})
export class OrdenesComponent implements OnInit {
  icons= FAICONS;
  faMagnifyingGlass= faMagnifyingGlass // remplazar por Icons= icons.search
  ordenList: Orden[] = [];
  allMecanicos: Mecanico[] = [];
  searchTerm = '';
  fechaFiltro = '';
  tipoTrabajoFiltro = '';
  selectedOrden?: Orden | null;
  addingOrden = false;
  // Tipos de trabajo disponibles para el filtro
  tiposTrabajo = ['Mecánica', 'Eléctrico', 'Engraso', 'Service', 'Herrería'];

  constructor(
    private ordenSvc: ordenService,
    private mecSvc: mecanicoService
  ) {}

  ngOnInit(): void {
    this.cargarOrdenes();
    this.cargarMecanicos();
  }

  cargarOrdenes(): void {
    this.ordenSvc.getAllOrdenes().subscribe(ordenes => {
      this.ordenList = ordenes;
    });
  }

  cargarMecanicos(): void {
    this.mecSvc.getAllMecanicos().subscribe(mecanicos => {
      this.allMecanicos = mecanicos;
    });
  }
  viewOrden(orden: Orden): void {
    this.selectedOrden = orden;
  }

  closeDetail(): void {
    this.selectedOrden = null;
  }
  get ordenesFiltradas(): Orden[] {
    return this.ordenList.filter(orden => {
      const matchesSearch = orden.patente.toLowerCase().includes(this.searchTerm.toLowerCase()) || 
                          orden.comentario.toLowerCase().includes(this.searchTerm.toLowerCase());
      
      const matchesDate = !this.fechaFiltro || 
                         orden.fechaIngreso.includes(this.fechaFiltro);
      
      const matchesTipo = !this.tipoTrabajoFiltro || 
                         orden.tipoTrabajo.includes(this.tipoTrabajoFiltro);
      
      return matchesSearch && matchesDate && matchesTipo;
    });
  }

  get ordenesEnProceso(): Orden[] {
    return this.ordenList.filter(o => o.estado === 'En Proceso');
  }

  get ordenesPendientes(): Orden[] {
    return this.ordenList.filter(o => o.estado === 'Pendiente');
  }

  get ordenesTerminadas(): Orden[] {
    return this.ordenList.filter(o => o.estado === 'Terminado');
  }

  getMecanicosNombres(mecanicoIds: number[]): string {
    if (!this.allMecanicos || !mecanicoIds) return 'Sin asignar';
    return mecanicoIds
      .map(id => this.allMecanicos.find(m => m.id === id)?.nombre)
      .filter(name => name)
      .join(', ');
  }
  nuevaOrden(): void {
    this.addingOrden = true;
    this.selectedOrden = undefined;
  }

  cancelAdd(): void {
    this.addingOrden = false;
  }

  onCreated(nueva: Orden): void {
    // Agregala a la lista y cerrá el panel
    this.ordenList.push(nueva);
    this.addingOrden = false;
  }


  confirmarEliminar(orden: Orden): void {
    if (confirm(`¿Estás seguro de eliminar la orden #${orden.id}?`)) {
      this.ordenSvc.deleteOrden(orden.id).subscribe(() => {
        this.cargarOrdenes();
      });
    }
  }
}

