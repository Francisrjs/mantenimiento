import { Item } from "./item.model";
import { Mecanico } from "./mecanico.model";

export interface Orden {
    id: number;
    estado: string;
    imagen?:string;
    fechaOrden:string;
    fechaIngreso: string;
    fechaEgreso: string;
    patente: string;
    patenteSemi1: string; // No va 
    patenteSemi2: string; // No va
    odometro: number;
    items?: Item[];
    tipoTrabajo: string[];
    anomalia: string;
    comentario: string;
    mecanicoId: number[];  // IDs de los mecánicos
    usuario: string;
  }
  // Tipos de trabajo comunes (opcional)
export const TiposTrabajo = {
    BUJES: 'Bujes',
    VIGIA: 'Vigia',
    AIRE: 'Perdida de aire',
    ELECTRICO: 'Electrico',
    FRENOS: 'Frenos',
    HERRERIA: 'Herrería',
    ENGRASE: 'Engrase',
    SERVICE: 'Service',
    EJE_NEUMATICO: 'Eje Neumatico'
  } as const;