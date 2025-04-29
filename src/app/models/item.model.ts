export interface Item{
id: number;
nombre:string;
accion: 'Revisar' | 'Corregir' | 'Cambiar';
tipo:'Mecánica' | 'Eléctrica' | 'Herrería';
detalle_item:string;
}