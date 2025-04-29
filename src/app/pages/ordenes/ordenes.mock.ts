import { Orden } from "src/app/models/orden.model";

export const OrdenesMantenimiento: Orden[] = [
  {
    id: 1,
    estado: "En Proceso",
    fechaOrden:"2025-04-19",
    fechaIngreso: "2025-04-17",
    fechaEgreso: "2025-04-21",
    patente: "OWG130",
    patenteSemi1: "POE653",
    patenteSemi2: "",
    odometro: 120000,
    tipoTrabajo: ["Bujes"],
    anomalia: "Cambio de bujes",
    detalle: "Cambio de bujes, pernos y cinta de freno",
    mecanicoId: [1, 2], // IDs de RICARDO y CRISTIAN
    usuario: "US-0035"
  },
  {
    id: 2,
    estado: "Pendiente",
    fechaOrden:"2025-04-19",
    fechaIngreso: "2025-04-19",
    fechaEgreso: "2025-04-19",
    patente: "AF389UV",
    patenteSemi1: "AE679UX",
    patenteSemi2: "AE679UY",
    odometro: 132000,
    tipoTrabajo: ["Vigia"],
    anomalia: "Falla en vigía",
    detalle: "Reparación de vigía de rueda delantera derecha",
    mecanicoId: [3, 4], // IDs de EZEQUIEL y DARIO
    usuario: "US-0035"
  },
  {
    id: 3,
    estado: "Terminado",
    fechaOrden:"2025-04-19",
    fechaIngreso: "2025-04-21",
    fechaEgreso: "2025-04-22",
    patente: "AF993HK",
    patenteSemi1: "AF948EA",
    patenteSemi2: "",
    odometro: 143000,
    tipoTrabajo: ["Perdida de aire"],
    anomalia: "Pérdida de aire",
    detalle: "Revisión y reparación de sistema de aire",
    mecanicoId: [4], // ID de DARIO
    usuario: "US-0035"
  },
  {
    id: 4,
    estado: "Terminado",
    fechaIngreso: "2025-04-21",
    fechaOrden:"2025-04-19",
    fechaEgreso: "2025-04-22",
    patente: "AD333IU",
    patenteSemi1: "AD323FU",
    patenteSemi2: "",
    odometro: 98000,
    tipoTrabajo: ["Eje Neumatico"],
    anomalia: "Buje dañado",
    detalle: "Reparación de buje eje neumático",
    mecanicoId: [1], // ID de RICARDO
    usuario: "US-0035"
  },
  {
    id: 5,
    estado: "Terminado",
    fechaIngreso: "2025-04-21",
    fechaOrden:"2025-04-19",
    fechaEgreso: "2025-04-22",
    patente: "AD239PP",
    patenteSemi1: "AD417KR",
    patenteSemi2: "",
    odometro: 128000,
    tipoTrabajo: ["Service"],
    anomalia: "Base de filtro",
    detalle: "Cambio de base de filtro de combustible y bomba",
    mecanicoId: [2], // ID de CRISTIAN
    usuario: "US-0035"
  },
  {
    id: 6,
    estado: "Pendiente",
    fechaIngreso: "2025-04-21",
    fechaOrden:"2025-04-19",
    fechaEgreso: "2025-04-22",
    patente: "AB633TZ",
    patenteSemi1: "IUJ331",
    patenteSemi2: "",
    odometro: 114000,
    tipoTrabajo: ["Electrico", "Frenos"],
    anomalia: "Frenos y luces",
    detalle: "Cambio de válvula de frenos y reparación de luces",
    mecanicoId: [1], // ID de RICARDO
    usuario: "US-0035"
  },
  {
    id: 7,
    estado: "En Proceso",
    fechaIngreso: "2025-04-22",
    fechaOrden:"2025-04-19",
    fechaEgreso: "2025-04-23",
    patente: "X",
    patenteSemi1: "",
    patenteSemi2: "AF014KM",
    odometro: 0,
    tipoTrabajo: ["Herrería"],
    anomalia: "Parante roto",
    detalle: "Reparación de parante y engrases",
    mecanicoId: [1], // ID de RICARDO
    usuario: "US-0035"
  },
  {
    id: 8,
    estado: "Terminado",
    fechaIngreso: "2025-04-22",
    fechaOrden:"2025-04-19",
    fechaEgreso: "2025-04-22",
    patente: "AF136HN",
    patenteSemi1: "AF014KM",
    patenteSemi2: "",
    odometro: 151000,
    tipoTrabajo: ["Engrase"],
    anomalia: "Engrase",
    detalle: "Lavado y engrase",
    mecanicoId: [4], // ID de DARIO
    usuario: "US-0035"
  },
  {
    id: 9,
    estado: "Terminado",
    fechaIngreso: "2025-04-22",
    fechaOrden:"2025-04-19",
    fechaEgreso: "2025-04-22",
    patente: "AF411UY",
    patenteSemi1: "AA561UF",
    patenteSemi2: "",
    odometro: 109000,
    tipoTrabajo: ["Electrico"],
    anomalia: "Luces rotas",
    detalle: "Reparación de baberos y luces",
    mecanicoId: [3], // ID de EZEQUIEL
    usuario: "US-0035"
  },
  {
    id: 10,
    estado: "En Proceso",
    fechaIngreso: "2025-04-23",
    fechaOrden:"2025-04-19",
    fechaEgreso: "2025-04-23",
    patente: "AE908YL",
    patenteSemi1: "AE908YZ",
    patenteSemi2: "AE952TA",
    odometro: 136000,
    tipoTrabajo: [],
    anomalia: "Goma destalonada",
    detalle: "Cambio de goma y engrase",
    mecanicoId: [3], // ID de EZEQUIEL
    usuario: "US-0035"
  }
];

