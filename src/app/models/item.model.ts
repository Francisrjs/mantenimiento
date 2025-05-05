export interface Item{
id: number;
nombre:string;
accion: 'Revisar' | 'Corregir' | 'Cambiar';
tipo:'Mecánica' | 'Eléctrica' | 'Herrería';
tiempoTrabajado?: number;       // total acumulado en segundos, NO VA EN  BACK
trabajandoDesde?: Date | null; // EN BACK
detalle_item:string;
}