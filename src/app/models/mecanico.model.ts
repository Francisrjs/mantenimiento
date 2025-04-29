export interface Mecanico {
    id: number;
    nombre: string;
    especialidad?: string;  // Opcional: si quieres añadir especialidades
    activo?: boolean;      // Opcional: para manejar estado
    foto?:string;
  }