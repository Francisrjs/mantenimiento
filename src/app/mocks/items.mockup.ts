import { Item } from "../models/item.model";

export const ITEMS: Item[] = [
  {
    id:  1,
    nombre: 'Aceite de motor',
    accion: 'Revisar',
    tipo: 'Mecánica',
    detalle_item: 'Revisar el espesor y nivel del aceite'
  },
  {
    id:  2,
    nombre: 'Pastillas de freno',
    accion: 'Cambiar',
    tipo: 'Mecánica',
    detalle_item: 'Sustituir pastillas si desgaste > 70%'
  },
  {
    id:  3,
    nombre: 'Luces delanteras',
    accion: 'Revisar',
    tipo: 'Eléctrica',
    detalle_item: 'Comprobar funcionamiento y alineación'
  },
  {
    id:  4,
    nombre: 'Batería',
    accion: 'Corregir',
    tipo: 'Eléctrica',
    detalle_item: 'Limpiar bornes y verificar carga'
  },
  {
    id:  5,
    nombre: 'Fugas de aire (semirremolque)',
    accion: 'Revisar',
    tipo: 'Herrería',
    detalle_item: 'Inspeccionar mangueras y conexiones'
  },
  {
    id:  6,
    nombre: 'Puertas del semirremolque',
    accion: 'Corregir',
    tipo: 'Herrería',
    detalle_item: 'Ajustar bisagras y sellos'
  },
  {
    id:  7,
    nombre: 'Sistema de freno de aire',
    accion: 'Revisar',
    tipo: 'Mecánica',
    detalle_item: 'Probar presión de servicio y freno de estacionamiento'
  },
  {
    id:  8,
    nombre: 'Servicio del tractor (oil & filter)',
    accion: 'Cambiar',
    tipo: 'Mecánica',
    detalle_item: 'Reemplazar filtro de aceite y cambiar aceite'
  },
  {
    id:  9,
    nombre: 'Revisión de ejes traseros',
    accion: 'Revisar',
    tipo: 'Mecánica',
    detalle_item: 'Verificar juego y lubricación'
  },
  {
    id: 10,
    nombre: 'Correa del alternador',
    accion: 'Revisar',
    tipo: 'Mecánica',
    detalle_item: 'Comprobar tensión y desgaste'
  },
  {
    id: 11,
    nombre: 'Luces de freno traseras',
    accion: 'Revisar',
    tipo: 'Eléctrica',
    detalle_item: 'Comprobar bombillas y conexiones'
  },
  {
    id: 12,
    nombre: 'Revisión matafuegos',
    accion: 'Revisar',
    tipo: 'Mecánica',
    detalle_item: 'Verificar fecha de vencimiento y soporte'
  },
  {
    id: 13,
    nombre: 'Filtro de aire',
    accion: 'Cambiar',
    tipo: 'Mecánica',
    detalle_item: 'Sustituir el elemento filtrante'
  },
  {
    id: 14,
    nombre: 'Sensor de presión de neumáticos',
    accion: 'Corregir',
    tipo: 'Eléctrica',
    detalle_item: 'Calibrar o reemplazar sensor defectuoso'
  },
  {
    id: 15,
    nombre: 'Chasis (revisión estructural)',
    accion: 'Revisar',
    tipo: 'Herrería',
    detalle_item: 'Arreglo de puerta de semi'
  }
];