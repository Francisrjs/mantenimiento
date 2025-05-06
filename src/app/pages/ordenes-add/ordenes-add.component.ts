import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Mecanico } from 'src/app/models/mecanico.model';
import { Orden, TiposTrabajo } from 'src/app/models/orden.model';
import { ItemService } from 'src/app/services/item.service';
import { mecanicoService } from 'src/app/services/mecanico.service';
import { ordenService } from 'src/app/services/orden.service';

@Component({
  selector: 'app-ordenes-add',
  templateUrl: './ordenes-add.component.html',
  styleUrls: ['./ordenes-add.component.css']
})
export class OrdenesAddComponent implements OnInit {
  @Output() close = new EventEmitter<void>();
  @Output() created = new EventEmitter<Orden>();

  form!: FormGroup;
  allMecanicos: Mecanico[] = [];
  // Lista de tipos con índice para mantener mapeo tras filtrar
  tipoTrabajoList: { key: string; value: string; index: number }[] = [];
  searchTipoTrabajo = '';

  constructor(
    private fb: FormBuilder,
    private ordenSvc: ordenService,
    private mecSvc: mecanicoService,
    public itemService: ItemService
  ) {}

  ngOnInit(): void {
    // Transformamos TiposTrabajo en array con índice
    this.tipoTrabajoList = (Object.keys(TiposTrabajo) as Array<keyof typeof TiposTrabajo>)
      .map((key, idx) => ({ key, value: TiposTrabajo[key], index: idx }));

    // Inicialización del formulario con FormArray de booleanos
    this.form = this.fb.group({
      estado: ['En Proceso', Validators.required],
      fechaIngreso: ['', Validators.required],
      fechaEgreso: [''],
      patente: ['', Validators.required],
      patenteSemi1: [''],
      patenteSemi2: [''],
      odometro: [0, [Validators.required, Validators.min(0)]],
      tipoTrabajo: this.fb.array(
        this.tipoTrabajoList.map(() => this.fb.control(false))
      ),
      anomalia: [''],
      comentario: [''],
      mecanico: [[]]
    });
    this.tipoTrabajoList = (Object.keys(TiposTrabajo) as Array<keyof typeof TiposTrabajo>)
  .map((key, idx) => ({ key, value: TiposTrabajo[key], index: idx }));
    // Carga de mecánicos
    this.mecSvc.getAllMecanicos().subscribe(list => this.allMecanicos = list);
  }

  toggleTipoTrabajo(idx: number): void {
    const arr = this.form.get('tipoTrabajo') as FormArray;
    arr.at(idx).setValue(!arr.at(idx).value);
  }


  get tipoTrabajoSeleccionados(): number {
    return this.tipoTrabajoArray.controls
      .filter(ctrl => ctrl.value as boolean)
      .length;
  }
  get filteredTipoTrabajo() {
    const term = this.searchTipoTrabajo.toLowerCase();
    return this.tipoTrabajoList.filter(opt =>
      opt.value.toLowerCase().includes(term)
    );
  }
  get tipoTrabajoArray(): FormArray {
    return this.form.get('tipoTrabajo') as FormArray;
  }
  create(): void {
    if (this.form.invalid) return;
    const fv = this.form.value;
    const selectedKeys = this.tipoTrabajoList
    .filter(opt => this.form.value.tipoTrabajo[opt.index])
    .map(opt => opt.key);
  
    const newOrden: Orden = {
      id: 0,
      estado: fv.estado,
      fechaOrden: '',
      fechaIngreso: fv.fechaIngreso,
      fechaEgreso: fv.fechaEgreso,
      patente: fv.patente,
      patenteSemi1: fv.patenteSemi1,
      patenteSemi2: fv.patenteSemi2,
      odometro: fv.odometro,
      tipoTrabajo: selectedKeys,
      anomalia: fv.anomalia,
      comentario: fv.comentario,
      mecanicoId: fv.mecanico,
      usuario: ''
    };

    this.ordenSvc.createOrden(newOrden).subscribe(o => {
      this.created.emit(o);
      this.close.emit();
    });
  }
  onMecanicoToggle(id: number, checked: boolean): void {
    const arr: number[] = this.form.get('mecanico')?.value || [];
    const idx = arr.indexOf(id);
    if (checked && idx < 0) arr.push(id);
    if (!checked && idx >= 0) arr.splice(idx, 1);
    this.form.get('mecanico')?.setValue(arr);
  }


  cancel(): void {
    this.close.emit();
  }
}