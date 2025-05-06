import { Mecanico } from "./mecanico.model";

export interface Item{
id: number;
nombre:string;
accion: 'Revisar' | 'Corregir' | 'Cambiar' | 'Anomalía';
tipo:'Mecánica' | 'Eléctrica' | 'Herrería';
tiempoTrabajado?: number;       // total acumulado en segundos, NO VA EN  BACK
trabajandoDesde?: Date | null; // EN BACK
asignarResponsable?: Mecanico[]
detalle_item:string;
}