import { faMagnifyingGlass, faEdit, faTrash, faPlus, faEye, faWrench, faPenToSquare, faHammer, faBolt, faTimesSquare, faClock } from '@fortawesome/free-solid-svg-icons';

export const FAICONS = {
  search: faMagnifyingGlass,
  edit: faPenToSquare,
  delete: faTrash,
  add: faPlus,
  view: faEye,
  wrench: faWrench,
  hammer: faHammer,
  bolt: faBolt,
  timer: faClock
};
export function getIconForTipo(tipo: string) {
  switch (tipo) {
    case 'Mecánica': return FAICONS.wrench;
    case 'Herrería': return FAICONS.hammer;
    case 'Eléctrica': return FAICONS.bolt;
    default:           return FAICONS.wrench;
  }
}