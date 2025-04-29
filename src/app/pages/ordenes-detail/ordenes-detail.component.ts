import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, FormControl, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Orden } from 'src/app/models/orden.model';
import { ordenService } from 'src/app/services/orden.service';
import { mecanicoService } from 'src/app/services/mecanico.service';
import { Mecanico } from 'src/app/models/mecanico.model';

@Component({
  selector: 'app-ordenes-detail',
  templateUrl: './ordenes-detail.component.html',
  styleUrls: ['./ordenes-detail.component.css']
})
export class OrdenesDetailComponent implements OnInit {
  @Input() orden!: Orden;             // una sola declaración, non-null asserted
  @Output() close = new EventEmitter<void>();
  @Output() deleted = new EventEmitter<number>();
  editMode = false;
  form!: FormGroup;
  allMecanicos: Mecanico[] = [];
  tipoTrabajoOptions = ['Mecánica', 'Eléctrico', 'Engraso', 'Service', 'Herrería'];
  loading = true;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private ordenSvc: ordenService,
    private mecSvc: mecanicoService
  ) {}

  ngOnInit(): void {
    if (!this.orden) return;
    // Inicializamos lista de mecánicos
    this.mecSvc.getAllMecanicos().subscribe(list => this.allMecanicos = list);
    this.initForm();  // inicializa el formulario basado en this.orden
  }

  private initForm() {
    this.form = this.fb.group({
      estado:      [this.orden.estado,       Validators.required],
      fechaIngreso:[this.orden.fechaIngreso, Validators.required],
      fechaEgreso: [this.orden.fechaEgreso],
      patente:     [this.orden.patente,      Validators.required],
      patenteSemi1:[this.orden.patenteSemi1],
      patenteSemi2:[this.orden.patenteSemi2],
      odometro:    [this.orden.odometro,     [Validators.required, Validators.min(0)]],
      tipoTrabajo: this.buildTipoTrabajoArray(),
      anomalia:    [this.orden.anomalia],
      detalle:     [this.orden.detalle],
      mecanico:    [this.orden.mecanicoId],
      usuario:     [this.orden.usuario]
    });
  }

  private buildTipoTrabajoArray(): FormArray {
    return this.fb.array(
      this.tipoTrabajoOptions.map(opt => this.fb.control(this.orden.tipoTrabajo.includes(opt)))
    );
  }

  get tipoTrabajoControls(): AbstractControl[] {
    return (this.form.get('tipoTrabajo') as FormArray).controls;
  }

  toggleEdit(): void {
    this.editMode = !this.editMode;
    if (!this.editMode) {
      this.initForm(); // reset
    }
  }

  save(): void {
    if (this.form.invalid) return;
    const fv = this.form.value;
    const updated: Orden = {
      ...this.orden,
      ...fv,
      tipoTrabajo: this.tipoTrabajoOptions.filter((_, i) => fv.tipoTrabajo[i]),
      mecanicoId: fv.mecanico
    };
    this.ordenSvc.updateOrden(updated).subscribe(o => {
      if (o) {
        this.orden = o;
        this.deleted.emit(o.id);  // opcional: emitir o recargar parent
        this.toggleEdit();
      }
    });
  }

  delete(): void {
    this.ordenSvc.deleteOrden(this.orden.id).subscribe(ok => {
      if (ok) this.deleted.emit(this.orden.id);
    });
  }

  getMecanicosNombres(ids: number[]): string {
    return ids
      .map(id => this.allMecanicos.find(m => m.id === id)?.nombre)
      .filter(n => !!n)
      .join(', ');
  }

  setEstado(estado: string): void {
    if (!this.editMode) return;
    this.form.get('estado')?.setValue(estado);
  }

  onMecanicoToggle(id: number, checked: boolean): void {
    const arr: number[] = this.form.get('mecanico')?.value || [];
    const idx = arr.indexOf(id);
    if (checked && idx < 0) arr.push(id);
    if (!checked && idx >= 0) arr.splice(idx, 1);
    this.form.get('mecanico')?.setValue(arr);
  }

  toggleTipoTrabajo(i: number): void {
    const arr = this.form.get('tipoTrabajo') as FormArray;
    arr.at(i).setValue(!arr.at(i).value);
  }
}
